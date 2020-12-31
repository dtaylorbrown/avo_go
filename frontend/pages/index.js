import { Fragment } from 'react';
import Head from 'next/head';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY{
    allRecipes {
      id
      name
      category {
        name
      }
      ingredients {
        name
        food {
          name
        }
        quantity
        measurement
        unitOfMeasure
      }
      method
      tags {
        name
      }
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(ALL_RECIPES_QUERY);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error! ${error.message}</p>
  if(!data) return <p>No Recipes here!</p>

  return (
    <div>
      <Head>
        <title>Avo' Go</title>
      </Head>
      {data.allRecipes.map(recipe => {
        console.log(recipe);
        return(
          <p key={recipe.id}>{recipe.name}</p>
        )
      })}
    </div>
  )
}

export default Home;
