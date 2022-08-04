import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

function PostCard() {
  return (
    <Stack w="20rem">
      <Image src="/image/flower.jpeg" h="300" borderRadius="lg" />

      <Stack p="4" boxShadow="lg" borderRadius="lg">
        <Heading mb="2" as="h2">
          Lorem Ipsum is simply dummy
        </Heading>

        <Flex align="center">
          <Avatar src="/image.man.jpeg" />
          <Text m="2" fontWeight="bold">
            Sumit Thapa
          </Text>
          <Text>18 may 2022</Text>
        </Flex>
        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </Text>

        <Flex>
          <Tag># Tags</Tag>
        </Flex>

        <Box>
          <Button colorScheme="orange">Read More</Button>
        </Box>
      </Stack>
      <Heading pt="2rem">Read More.....</Heading>
    </Stack>
  );
}

export default PostCard;
