import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

const SINGLE_RECIPE_QUERY = gql`
    query SINGLE_RECIPE_QUERY($url: String!) {
        allRecipes(where: { url: $url }) {
            id
            name
            method
        }
    }
`;

const SingleRecipe = ({ slug }) => {
    const { data } = useQuery(SINGLE_RECIPE_QUERY, {
        variables: { url: slug }
    });

    const recipe = data?.allRecipes[0];

    return (
        <div>
            <h2>{recipe?.name}</h2>
            <p>{recipe?.method}</p>
        </div>
    )
}

export default SingleRecipe;
