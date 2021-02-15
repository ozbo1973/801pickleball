import Menu from "components/nav/Menu";
import PaymentOptions from "./PaymentOptions";
import { Box, Grid, Image, Text, Center, VStack, Icon } from "@chakra-ui/react";
import styles from "styles/Footer.module.css";

const Footer = () => {
  return (
    <Box className={styles.footerGradient}>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]}
        color="white"
        fontWeight="Bold"
      >
        <Center pt={["1rem", 0]}>
          <Image src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-footer.png?v=1611838453" />
        </Center>

        <Menu />
        <PaymentOptions />
      </Grid>
      <Box>
        <Text
          borderTop="1px solid white"
          color="white"
          fontWeight="bold"
          textAlign="center"
          p="1rem"
        >
          © 2021-801pickleball.net
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
