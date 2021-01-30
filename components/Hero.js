import { useRouter } from "next/router";
import Button from "components/ui/MainButton";
import { Box, Center, Image, Text, VStack } from "@chakra-ui/react";
import styles from "styles/Hero.module.css";

const Hero = () => {
  const router = useRouter();
  return (
    <Box
      pt="2rem"
      className={styles.heroGradient}
      w="100%"
      position="relative"
      h="80vh"
    >
      <Center>
        <VStack spacing={8}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-nobg.webp?v=1611838441"
            h="100%"
            m="auto"
            objectFit="contain"
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

          <Button action={() => router.push("/products")} size="lg">
            Shop Now
          </Button>
        </VStack>
      </Center>
    </Box>
  );
};

export default Hero;
