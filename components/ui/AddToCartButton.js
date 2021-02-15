import { useContext, useState } from "react";
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
  const [isLoading, setIsLoading] = useState(false);

  const handleOnClick = async () => {
    setIsLoading(true);
    await addItemToCheckout(product.id, quantity, showCart);
    setIsLoading(false);
  };

  return (
    <Button
      action={handleOnClick}
      size={size || "lg"}
      w={w || "10rem"}
      disabled={disabled}
      isLoading={isLoading}
      loadingText="Adding to Cart"
    >
      Add To Cart
    </Button>
  );
};

export default AddToCartButton;
