import Image from "next/image";
import Button from "components/ui/MainButton";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

const TextWithImage = ({
  reverse,
  heading,
  image,
  text,
  btnText,
  btnAction,
  imageSize,
}) => {
  const reverseSection = reverse ? "row-reverse" : "row";

  const displayButton = () => {
    return btnText && <Button action={btnAction}>{btnText}</Button>;
  };

  return (
    <Box p="1rem" borderBottom="2px solid" borderColor="brand.red.500" w="100%">
      <Flex flexDir={["column", reverseSection]}>
        <Box textAlign="center" pt="2rem" w={["100%", "50%"]}>
          <Image
            src={image}
            alt={`${heading} logo`}
            width={imageSize.w}
            height={imageSize.h}
          />
        </Box>
        <Flex
          w={["100%", "50%"]}
          flexDir="column"
          justifyContent="center"
          alignItems="center"
          p={["1rem", "2rem"]}
        >
          <Heading textAlign="center" p={["1rem", "2rem"]}>
            {heading && heading}
          </Heading>
          <Box p={["1rem", "2rem"]}>{text && text}</Box>
          {displayButton()}
        </Flex>
      </Flex>
    </Box>
  );
};

export default TextWithImage;
