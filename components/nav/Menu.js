// import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "contexts/ShopContext";
import { Link, VStack } from "@chakra-ui/react";

const Menu = () => {
  const router = useRouter();
  const { closeMenu } = useContext(ShopContext);

  function handleMenuClick(e) {
    e.preventDefault();
    closeMenu();
    router.push(e.target.href);
  }

  return (
    <VStack p="2rem">
      <Link onClick={handleMenuClick} href="/shop">
        Shop
      </Link>
      <Link onClick={handleMenuClick} href="/about">
        801 Team
      </Link>
      <Link onClick={handleMenuClick} href="/contact">
        Contact Us
      </Link>
    </VStack>
  );
};

export default Menu;
