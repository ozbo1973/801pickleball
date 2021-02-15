import { useContext } from "react";
import { ShopContext } from "contexts/ShopContext";
import Button from "components/ui/MainButton";

const AddToCartButton = ({
  disabled = false,
  product,
  quantity = 1,
  showCart,
  size,
  w,
}) => {
  const { addItemToCheckout } = useContext(ShopContext);

  return (
    <Button
      action={() => addItemToCheckout(product.id, quantity, showCart)}
      size={size || "lg"}
      w={w || "10rem"}
      disabled={disabled}
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
