import { UNDER_CONSTRUCTION } from "config";
import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import styles from "styles/Hero.module.css";

const HeroUC = () => {
  return (
    <Box
      pt="5rem"
      className={styles.heroGradient}
      w="100%"
      position="relative"
      minH="95vh"
    >
      <Center>
        <VStack spacing={8}>
          <Image
            boxSize="xl"
            src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-nobg.webp?v=1611838441"
            h="100%"
            m="auto"
            objectFit="contain"
            fallbackSrc="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-nobg.png?v=1614474964"
          />

          <Text
            className="tracking-in-expand-fwd"
            w="100%"
            textAlign="center"
            color="#fff"
            textShadow="1px 1px 2px #D52320;"
            fontWeight="bold"
            fontSize={["2.5rem", "5rem"]}
          >
            Pickleball
          </Text>

          <Text
            w="100%"
            textAlign="center"
            color="#fff"
            textShadow="1px 1px 2px #D52320;"
            fontWeight="bold"
            fontSize={["1.3rem", "2.3rem"]}
          >
            {UNDER_CONSTRUCTION}
          </Text>
        </VStack>
      </Center>
    </Box>
  );
};

export default HeroUC;
