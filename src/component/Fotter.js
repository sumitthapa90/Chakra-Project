import { Container, Text } from "@chakra-ui/react";
import React from "react";

function Fotter() {
  return (
    <Container
      mt="2rem"
      p="2"
      bg="orange"
      maxW="1300"
      display="flex"
      justifyContent="center"
    >
      <Text fontSize="1.5rem">2022 @copyright@sumit</Text>
    </Container>
  );
}

export default Fotter;
