import { SearchIcon } from "@chakra-ui/icons";
import { Container, Flex, Text, Image } from "@chakra-ui/react";
import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

function Navbar() {
  return (
    <Container
      as="nav"
      maxW={1300}
      boxShadow="lg"
      borderRadius="lg"
      display="flex"
      justifyContent="space-between"
      p="4"
      pos="sticky"
      top="0"
      z-index="50"
      bg="white"
    >
      <Flex align="center">
        <Image mr="4" src="/image/Manchester.jpg" w="50px" h="50px" />
        <Text>Home</Text>
      </Flex>

      <Flex align="center">
        <Text mr="4">Post</Text>
        <Text mr="4">Trending</Text>
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<SearchIcon color="gray.300" />}
          />
          <Input
            w={{ base: "100px", sm: "160px", md: "auto" }}
            type="tel"
            placeholder="Phone number"
          />
        </InputGroup>
      </Flex>
    </Container>
  );
}

export default Navbar;
