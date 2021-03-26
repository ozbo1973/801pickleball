import Image from "next/image";
import { Box } from "@chakra-ui/react";

function HeroImage(props) {
  const { underConstruction } = props;
  return (
    <Box mt={underConstruction && "4rem"} h="100%">
      <Image
        // objectPosition="top"
        // boxSize="xl"
        src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-nobg.png?v=1614474964"
        // h="100%"
        // m="auto"
        // objectFit="contain"
        width={800}
        height={350}
        // fallbackSrc="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-nobg.png?v=1614474964"
      />
    </Box>
  );
}

export default HeroImage;
