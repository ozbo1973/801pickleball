import Menu from "components/nav/Menu";
import { Box, Grid, Image, Text, Center } from "@chakra-ui/react";
import styles from "styles/Footer.module.css";

const Footer = () => {
  return (
    <Box className={styles.footerGradient}>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]}
        color="white"
        fontWeight="Bold"
      >
        <Center>
          <Image src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-footer.png?v=1611838453" />
        </Center>
        {/* <VStack p="2rem">
          <Link href="/">Featured Product 1</Link>
          <Link href="/">Featured Product 1</Link>
          <Link href="/">Featured Product 1</Link>
        </VStack> */}

        <Menu />
      </Grid>
      <Box>
        <Text
          borderTop="1px solid white"
          color="white"
          fontWeight="bold"
          textAlign="center"
          p="1rem"
        >
          © Copyright 801pickleball.net
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
