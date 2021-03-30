import Image from "next/image";
import { Box, Heading } from "@chakra-ui/react";

function OtherPageLayout(props) {
  const { heading, imageObj, children } = props;
  const { src, alt, height, width, boxSize } = imageObj;

  return (
    <Box
      display="flex"
      flexDir="column"
      p={2}
      mt="3rem"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        m="2px auto"
        border="thin solid black"
        borderRadius="full"
        boxSize={boxSize}
        overflow="hidden"
      >
        <Image
          src={src || "https://via.placeholder.com/150"}
          alt={alt}
          width={width}
          height={height}
        />
      </Box>
      <Heading m={2}>{heading}</Heading>
      {children}
    </Box>
  );
}

export default OtherPageLayout;
