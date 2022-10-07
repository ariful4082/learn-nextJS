import { Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

const Post = ({post}) => {
    return (
        <Container maxWidth={"md"}>
            <Typography variant='h4' component="h6">{post.title}</Typography>
            <Typography variant='body2'>{post.body}</Typography>
        </Container>
    );
};

export async function getStaticProps({params}) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
    const post = await res.json()
  
    return {
      props: {
        post,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 10, // In seconds
    }
  }
  
  // This function gets called at build time on server-side.
  // It may be called again, on a serverless function, if
  // the path has not been generated.
  export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await res.json()
  
    // Get the paths we want to pre-render based on posts
    const paths = posts.map((post) => ({
      params: { postId: `${post.id}` },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: blocking } will server-render pages
    // on-demand if the path doesn't exist.
    return { paths, fallback: 'blocking' }
  }

export default Post;