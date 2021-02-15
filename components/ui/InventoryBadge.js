import React from "react";
import { Badge } from "@chakra-ui/react";

const InventoryBadge = ({ selectedVariant, p, ml, fontSize }) => {
  const {
    availableToSell = true,
    outOfStock = false,
    limitedInventory = false,
  } = selectedVariant || {};

  return (
    <Badge
      ml={ml || 2}
      p={p || 2}
      fontSize={fontSize || "0.7rem"}
      borderRadius="full"
      variant={!availableToSell ? "solid" : "outline"}
      colorScheme="brand.red"
      hidden={!outOfStock && availableToSell && !limitedInventory}
    >
      {limitedInventory && `only ${limitedInventory} left`}
      {outOfStock && "Back Order"}
      {!availableToSell && "Not Available"}
    </Badge>
  );
};

export default InventoryBadge;
