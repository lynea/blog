import Head from 'next/head';
import { FunctionComponent } from 'react';
import Container from '../components/container';
import MoreStories from '../components/more-stories';
import HeroPost from '../components/hero-post';
import Intro from '../components/intro';
import Layout from '../components/layout';
import client from '../client';
import * as post from '../graphql/queries/posts';

// TODO: type posts
type IndexProps = {
    allPosts: any;
    preview: boolean;
};

const Index: FunctionComponent<IndexProps> = ({ allPosts, preview }) => {
    const heroPost = allPosts[0];
    const morePosts = allPosts.slice(1);
    return (
        <>
            <Layout preview={preview}>
                <Head>
                    <title>Next.js Blog Example with</title>
                </Head>
                <Container>
                    <Intro />
                    {heroPost && (
                        <HeroPost
                            title={heroPost?.title}
                            coverImage={heroPost?.coverImage}
                            date={heroPost?.date}
                            author={heroPost?.author}
                            slug={heroPost?.slug}
                            excerpt={heroPost?.excerpt}
                        />
                    )}
                    {morePosts.length > 0 && <MoreStories posts={morePosts} />}
                </Container>
            </Layout>
        </>
    );
};

export async function getStaticProps({ preview = null }) {
    // const allPosts = (await getAllPostsForHome(preview)) || [];

    const { data } = await client.query({
        query: post.ALL_POST_QUERY,
        variables: {},
    });

    const { posts } = await data;

    return {
        props: { allPosts: posts, preview },
    };
}

export default Index;
