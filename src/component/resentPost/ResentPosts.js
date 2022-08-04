import { Container, Grid, GridItem } from "@chakra-ui/react";
import PostCard from "./PostCard";

function ResentPosts() {
  return (
    <>
      <Container maxW="1300px">
        <Grid
          gridTemplateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
          gridGap="4"
        >
          <GridItem display="flex" justifyContent="center">
            <PostCard />
          </GridItem>

          <GridItem display="flex" justifyContent="center">
            <PostCard />
          </GridItem>

          <GridItem display="flex" justifyContent="center">
            <PostCard />
          </GridItem>

          <GridItem display="flex" justifyContent="center">
            <PostCard />
          </GridItem>
        </Grid>
      </Container>
    </>
  );
}

export default ResentPosts;
