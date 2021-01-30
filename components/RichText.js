import { Box, Center, Heading, Text } from "@chakra-ui/react";

const RichText = ({ heading, text, mb = "0", bgDark }) => {
  return (
    <Box
      borderTopWidth={["2px", "4px"]}
      borderTopStyle="solid"
      borderTopColor="brand.red.500"
      mb={mb}
      backgroundColor={bgDark || "brand.dark.100"}
      p={["1.5rem", "2.5rem"]}
    >
      <Center
        color={bgDark ? "#fff" : "#000"}
        display="felx"
        flexDir="column"
        textAlign="center"
      >
        <Heading py="2.5rem">{heading && heading}</Heading>
        <Text pb="1.3rem">{text && text}</Text>
      </Center>
    </Box>
  );
};

export default RichText;
