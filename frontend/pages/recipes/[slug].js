import Head from 'next/head';
import SingleRecipe from '../../components/SingleRecipe';

const RecipeSingle = ({ slug }) => {
    return (
        <div style={{ padding: '20px 50px'}}>
            <Head>
                <title>Avo' Go</title>
            </Head>
            <h1>Avo' Go</h1>
            <hr />
            <br />
            <SingleRecipe slug={slug} />
        </div>
    )
}

RecipeSingle.getInitialProps = ({ query }) => {
    const { slug } = query;
    return { slug }
}

export default RecipeSingle;
