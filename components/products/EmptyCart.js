import React from "react";
import { Text, Box } from "@chakra-ui/react";

const EmptyCart = () => (
  <Box h="100%" w="100%">
    <Text
      h="100%"
      display="flex"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      color="brand.red.700"
    >
      Your Cart is empty.
    </Text>
  </Box>
);

export default EmptyCart;
