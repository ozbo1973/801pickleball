import Button from "components/ui/MainButton";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

const TextWithImage = ({
  reverse,
  heading,
  image,
  text,
  btnText,
  btnAction,
}) => {
  const reverseSection = reverse ? "row-reverse" : "row";

  const displayButton = () => {
    return btnText && <Button action={btnAction}>{btnText}</Button>;
  };

  return (
    <Box p="1rem" borderBottom="2px solid" borderColor="brand.red.500">
      <Flex flexDir={["column", reverseSection]} w="100%">
        <Image
          boxSize="300px"
          src={image}
          objectFit="contain"
          w={["100%", "50%"]}
        />
        <Flex
          w={["100%", "50%"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p={["1rem", "2rem"]}
        >
          <Heading p={["1rem", "2rem"]}>{heading && heading}</Heading>
          <Box p={["1rem", "2rem"]}>{text && text}</Box>
          {displayButton()}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TextWithImage;
