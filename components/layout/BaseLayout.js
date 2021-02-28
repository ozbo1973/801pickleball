import { UNDER_CONSTRUCTION } from "config";
import { useScroll } from "config/hooks";
import Meta from "components/meta";
import Navbar from "components/nav/Navbar";
import NavMenu from "components/nav/NavMenu";
import Cart from "components/cart/Cart";
import Footer from "components/footer/Footer";
import UnderConstruction from "components/layout/UnderConstruction";
import { Box } from "@chakra-ui/react";

const BaseLayout = ({ seo = {}, children }) => {
  const [scroll] = useScroll();

  return (
    <>
      <Meta seo={seo} />

      {UNDER_CONSTRUCTION ? (
        <UnderConstruction />
      ) : (
        <Box h="100%">
          <Box h={scroll ? "100%" : "100vh"} display="flex" flexDir="column">
            <Navbar scroll={scroll} />
            <NavMenu />
            <Cart />

            <Box flexGrow={1}>{children}</Box>
            <Box flexShrink={0}>
              <Footer />
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
};

export default BaseLayout;
