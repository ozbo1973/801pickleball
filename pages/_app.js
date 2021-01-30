import { ShopProvider } from "contexts/ShopContext";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "styles/theme";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ShopProvider>
        <Component {...pageProps} />
      </ShopProvider>
    </ChakraProvider>
  );
}

export default MyApp;
