import { useRouter } from "next/router";
import Button from "components/ui/MainButton";
import HeroImage from "./hero-image";
import UnderConstructionText from "./underconstruction-text";
import { Box, Center, Text, VStack } from "@chakra-ui/react";
import styles from "styles/Hero.module.css";

const Hero = (props) => {
  const { underConstruction } = props;

  const router = useRouter();
  return (
    <Box
      pt="2rem"
      className={styles.heroGradient}
      w="100%"
      // position="relative"
      minH="80vh"
    >
      <Center>
        <VStack spacing={5}>
          <HeroImage underConstruction={underConstruction} />

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

          <Box mb={["2rem", "5rem"]}>
            {underConstruction ? (
              <UnderConstructionText />
            ) : (
              <Box mb="5rem">
                <Button action={() => router.push("/shop")} size="lg">
                  Shop Now
                </Button>
              </Box>
            )}
          </Box>
        </VStack>
      </Center>
    </Box>
  );
};

export default Hero;
