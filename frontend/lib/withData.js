import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client';
// import { getDataFromTree } from '@apollo/react-ssr';
import { createUploadLink } from 'apollo-upload-client';
import { onError } from '@apollo/link-error';
import { withApollo } from 'next-with-apollo';
import { endpoint, prodEndpoint } from '../config';

const createClient = ({ headers, intiialState }) => {
    return new ApolloClient({
        link: ApolloLink.from([
            onError(({ graphQLErrors, networkError }) => {
                if(graphQLErrors) {
                    graphQLErrors.forEach(({ message, locations, path }) => {
                        console.log(
                            `[GraphQL error]: Message: ${message}, Location: ${location}, Path: ${path}`
                        );
                    });
                }
                if(networkError) {
                    console.log(
                        `[Network error]: ${networkError}. Backend is unreachable. Is it running?`
                    );
                }
            }),
            createUploadLink({
                uri: process.env.NODE_ENV === 'development' ? endpoint : prodEndpoint,
                fetchOptions: {
                    credentials: 'include'
                },
                headers,
            }),
        ]),
        cache: new InMemoryCache().restore(intiialState || {}),
    })
}

// @TODO -- why does getDataFromTree throw react server client errors?!
export default withApollo(createClient);