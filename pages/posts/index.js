import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid, Link, Typography
} from "@mui/material";
import { Link as nextLink } from "next/link";

import React from "react";

const Posts = ({ posts: data }) => {
  return (
    <Container maxWidth={"md"}>
      <Grid container spacing={2}>
        {data.map((post) => (
          <Grid key={post.id} item md={4}>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {post.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                 {post.body}
                </Typography>
              </CardContent>
              <CardActions>
                
                <Link size="small" href={`/posts/${post.id}`} passHref component={nextLink} >more</Link>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return {
    props: {
      posts,
    },

    revalidate: 10, // In seconds
  };
}

export default Posts;
