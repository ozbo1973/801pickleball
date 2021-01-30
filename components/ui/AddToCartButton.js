import { useContext } from "react";
import { ShopContext } from "contexts/ShopContext";
import Button from "components/ui/MainButton";

const AddToCartButton = ({ product, quantity }) => {
  const { addItemToCheckout } = useContext(ShopContext);

  return (
    <Button
      action={() => addItemToCheckout(product.id, quantity)}
      size="lg"
      w="10rem"
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
