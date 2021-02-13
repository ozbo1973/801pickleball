import { useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Flex, Image, Icon, Box, Badge } from "@chakra-ui/react";
import { ShopContext } from "contexts/ShopContext";
import { MdMenu, MdShoppingCart } from "react-icons/md";

const ICON_SIZE = [30, 50];
const Navbar = () => {
  const { openMenu, openCart, checkout } = useContext(ShopContext);
  const router = useRouter();

  return (
    <Flex
      backgroundColor="brand.mix.a"
      flexDir="row"
      justifyContent="space-between"
      alignItems="center"
      p="2rem"
    >
      <Icon
        fill="white"
        cursor="pointer"
        as={MdMenu}
        w={ICON_SIZE}
        h={ICON_SIZE}
        onClick={openMenu}
      />
      {router.pathname !== "/" && (
        <Link href="/">
          <Image
            src="https://cdn.shopify.com/s/files/1/0528/7798/3897/files/logo-801.webp?v=1611838470"
            w={100}
            h={100}
            cursor="pointer"
          />
        </Link>
      )}

      <Box>
        <Icon
          fill="white"
          cursor="pointer"
          as={MdShoppingCart}
          w={ICON_SIZE}
          h={ICON_SIZE}
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
