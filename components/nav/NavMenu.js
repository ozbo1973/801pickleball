import { useContext } from "react";
import { ShopContext } from "contexts/ShopContext";
import Menu from "components/nav/Menu";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
} from "@chakra-ui/react";

const NavMenu = () => {
  const { isMenuOpen, closeMenu } = useContext(ShopContext);

  return (
    <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement="left" size="sm">
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>
          <DrawerBody>
            <Menu />
          </DrawerBody>
          <DrawerFooter textAlign="center">
            <Text w="100%">© Copyright 801pickleball.net </Text>
          </DrawerFooter>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

export default NavMenu;
