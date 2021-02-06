import { useContext } from "react";
import { useRouter } from "next/router";
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
} from "@chakra-ui/react";

const Cart = () => {
  const { isCartOpen, closeCart, checkout, removeLineItem } = useContext(
    ShopContext
  );
  const router = useRouter();

  const handleClearCheckout = () => {
    router.replace({
      pathname: router.pathname,
      query: { ...router.query, removeCheckout: true },
    });
    closeCart();
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
                <Link w="100%" href={checkout.webUrl}>
                  <Button
                    isDisabled={!checkout.lineItems?.length}
                    w="100%"
                    color="white"
                    backgroundColor="darkgreen"
                    _hover={{ opacity: "70%" }}
                  >
                    Checkout
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
                  Clear Cart
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
