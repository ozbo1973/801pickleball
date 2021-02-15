import { Box, Center, VStack } from "@chakra-ui/react";

const CenterItem = ({ children }) => {
  return (
    <Box p="3rem" h="50vh" position="relative">
      <Center>
        <VStack
          spacing={4}
          position="absolute"
          top="50%"
          transform="translate(0,-50%)"
        >
          {children}
        </VStack>
      </Center>
    </Box>
  );
};

export default CenterItem;
