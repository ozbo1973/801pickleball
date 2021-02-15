import { Button } from "@chakra-ui/react";

const MainButton = ({
  children,
  color,
  w,
  action,
  bgColor,
  absolute,
  bottom,
  size,
  disabled,
}) => {
  return (
    <Button
      position={absolute ? "absolute" : "relative"}
      bottom={bottom || ""}
      backgroundColor={bgColor || "brand.red.500"}
      w={w || "10rem"}
      size={size || "md"}
      color={color || "white"}
      _hover={{ opacity: "70%" }}
      onClick={action}
      disabled={disabled || false}
    >
      {children}
    </Button>
  );
};

export default MainButton;
