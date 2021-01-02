import Head from 'next/head';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const ALL_RECIPES_QUERY = gql`
  query ALL_RECIPES_QUERY{
    allRecipes {
      id
      name
      url
    }
  }
`;

const Home = () => {
  const { data, error, loading } = useQuery(ALL_RECIPES_QUERY);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error! ${error.message}</p>

  return (
    <div style={{ padding: '20px 50px'}}>
      <Head>
        <title>Avo' Go</title>
      </Head>
      <h1>Avo' Go</h1>
      <hr />
      <br />
      {!data.allRecipes.length && <p>No Recipes here!</p> }
      {data.allRecipes.map(recipe => {
        return(
          <Link key={recipe.id} href={{
            pathname: `/recipes/${encodeURIComponent(recipe.url)}`
          }}>{recipe.name}</Link>
        )
      })}
    </div>
  )
}

export default Home;
