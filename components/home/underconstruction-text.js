import { UNDER_CONSTRUCTION } from "config";
import { Text } from "@chakra-ui/react";

function UnderConstructionText() {
  return (
    <Text
      w="100%"
      textAlign="center"
      color="#fff"
      textShadow="1px 1px 2px #D52320;"
      fontWeight="bold"
      fontSize={["1.3rem", "2.3rem"]}
    >
      {UNDER_CONSTRUCTION}
    </Text>
  );
}

export default UnderConstructionText;
