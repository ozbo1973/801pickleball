import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Image, Icon, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "contexts/ShopContext";
import { MdMenu, MdShoppingCart } from "react-icons/md";

const iconSizes = {
  icon: [25, 35],
  logo: [60, 65],
};
const Navbar = () => {
  const { icon, logo } = iconSizes;

  const { openMenu, openCart, checkout } = useContext(ShopContext);
  const router = useRouter();

  return (
    <Flex
      position={router.pathname === "/" ? "relative" : "sticky"}
      top={0}
      left={0}
      zIndex={500}
      backgroundColor="brand.mix.a"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      p={router.pathname === "/" ? "2rem" : "1rem"}
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={icon}
        h={icon}
        onClick={openMenu}
      />
      {router.pathname !== "/" && (
        <Link href="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/logo-801.webp?v=1611838470"
            w={logo}
            h={logo}
            cursor="pointer"
            fallbackSrc="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/logo-801.png?v=1614474944"
            alt="801 pickleball main logo"
          />
        </Link>
      )}

      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingCart}
          w={icon}
          h={icon}
          onClick={openCart}
        />
        <Badge backgroundColor="#f1f904" borderRadius="50%">
          {checkout.lineItems?.length}
        </Badge>
      </Box>
    </Flex>
  );
};

export default Navbar;
