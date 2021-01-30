import Link from "next/link";
import { VStack } from "@chakra-ui/react";

const Menu = () => (
  <VStack p="2rem">
    <Link href="/products">Shop</Link>
    <Link href="/about">801 Team</Link>
    <Link href="/contact">Contact Us</Link>
  </VStack>
);

export default Menu;
