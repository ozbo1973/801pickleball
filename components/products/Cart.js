import { useContext } from "react";
import { ShopContext } from "contexts/ShopContext";
import EmptyCart from "components/products/EmptyCart";
import CartItem from "components/products/CartItem";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  Link,
  Button,
  Box,
  Text,
} from "@chakra-ui/react";

const Cart = () => {
  const {
    isCartOpen,
    closeCart,
    checkout,
    removeLineItem,
    clearCheckout,
    createCheckout,
    thirdPartyCheckout,
  } = useContext(ShopContext);

  const handleClearCheckout = () => {
    clearCheckout();
    closeCart();
    createCheckout();
  };

  const displayCartItems = () => {
    return checkout.lineItems?.length ? (
      checkout.lineItems.map((item) => (
        <CartItem
          key={`cartItem_${item.id}`}
          item={item}
          removeAction={removeLineItem}
        />
      ))
    ) : (
      <EmptyCart />
    );
  };

  return (
    <>
      <Drawer
        size="sm"
        isOpen={isCartOpen}
        placement="right"
        onClose={closeCart}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Your Shopping Cart</DrawerHeader>

            <DrawerBody>{displayCartItems()}</DrawerBody>

            <DrawerFooter>
              <VStack width="100%" spacing={3}>
                <Box display={thirdPartyCheckout ? "flex" : "none"}>
                  <Text color="brand.red.800">
                    Warning: Closing cart will remove access to previous order.
                  </Text>
                </Box>
                <Link w="100%" href={checkout.webUrl}>
                  <Button
                    isDisabled={!checkout.lineItems?.length}
                    w="100%"
                    color="white"
                    backgroundColor="darkgreen"
                    _hover={{ opacity: "70%" }}
                  >
                    {thirdPartyCheckout ? "View Previous Order" : "Checkout"}
                  </Button>
                </Link>

                <Button
                  isDisabled={!checkout.lineItems?.length}
                  w="100%"
                  color="white"
                  backgroundColor="brand.red.900"
                  _hover={{ opacity: "70%" }}
                  onClick={handleClearCheckout}
                >
                  {thirdPartyCheckout
                    ? "Clear Previous Checkout"
                    : "Empty Cart"}
                </Button>
              </VStack>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Cart;
