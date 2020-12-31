import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client';
import withData from '../lib/withData';

function MyApp({ Component, apollo, pageProps }) {
  return (
    <ApolloProvider client={apollo}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default withData(MyApp);
