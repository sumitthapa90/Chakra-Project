import React from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

function Hero() {
  return (
    <Container
      display="flex"
      justifyContent="space-between"
      h="100vh"
      maxW="1300px"
      alignItems="center"
      flexDirection={{ base: "column", md: "row" }}
    >
      <Stack
        h="300px"
        justify="space-around"
        fontSize={{ base: "sm", sm: "md", md: "lg" }}
      >
        <Heading as="h1" fontSize={{ base: "2rem", md: "4rem" }}>
          Get Cripto Related knowledge
        </Heading>
        <Text as="p" maxW="80%">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English.
        </Text>

        <Box>
          <Button colorScheme="orange">Check Post</Button>
        </Box>
      </Stack>

      <Flex>
        <Image mr="4" src="/image/Manchester.jpg" borderRadius="100" h="70vh" />
      </Flex>
    </Container>
  );
}

export default Hero;
