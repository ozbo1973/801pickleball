import { useContext } from "react";
import { ShopContext } from "contexts/ShopContext";
import Button from "components/ui/MainButton";

const AddToCartButton = ({ product, quantity = 1, showCart, size, w }) => {
  const { addItemToCheckout } = useContext(ShopContext);

  return (
    <Button
      action={() => addItemToCheckout(product.id, quantity, showCart)}
      size={size || "lg"}
      w={w || "10rem"}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
