import Form from "./componets/Form"
import {
  Flex,
  Box,
  Center,
} from "@chakra-ui/react";

function App() {
  return (
    <Box h="100vh">
      <Center
        as="header"
        h={150}
        bg="teal.500"
        color="white"
        fontWeight="bold"
        fontSize="4xl"
        pb="8">
        Formulario
      </Center>
      <Flex
        align="center"
        justify="center"
        bg="blackAlpha.200"
        h="calc(100vh - 150px)"
      >
        <Center
          w="100%"
          maxW={840}
          bg="white"
          top={100}
          position="absolute"
          borderRadius={5}
          p="6"
          boxShadow="0 1px 2px #ccc"
        >
        <Form />
        </Center>

      </Flex>
    </Box>
  );
}

export default App;