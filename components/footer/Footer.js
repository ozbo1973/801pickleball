import Image from "next/image";
import Menu from "components/nav/Menu";
import PaymentOptions from "components/footer/PaymentOptions";
import { Box, Grid, Text, Center } from "@chakra-ui/react";
import styles from "styles/Footer.module.css";

const Footer = () => {
  return (
    <Box className={styles.footerGradient}>
      <Grid
        templateColumns={["repeat(1,1fr)", "repeat(3,1fr)"]}
        color="white"
        fontWeight="Bold"
      >
        <Box
          m="0 auto"
          w="100%"
          pos="relative"
          // width="9.5rem"
          // maxH="8.5rem"
          overflow="hidden"
        >
          <Image
            layout="fill"
            alt="801 pickle ball large logo"
            src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/801-pb-footer.png?v=1611838453"
            objectFit="contain"
            // width={200}
            // height={200}
          />
        </Box>

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
