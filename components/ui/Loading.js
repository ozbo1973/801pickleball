import React from "react";
import { Spinner } from "@chakra-ui/react";

const Loading = ({ size, emptyColor, color }) => {
  return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="brand.red.900"
      color="brand.red.500"
      size="xl"
    />
  );
};

export default Loading;
