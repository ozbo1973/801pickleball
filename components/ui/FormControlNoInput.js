import { FormLabel, FormControl, Text } from "@chakra-ui/react";

const FormControlNoInput = ({ label, info, fontWeight, fontColor }) => (
  <FormControl>
    <FormLabel>{label && `${label}:`}</FormLabel>
    <Text
      fontWeight={fontWeight || "bold"}
      color={fontColor || "brand.dark.700"}
      pb="2rem"
    >
      {info}
    </Text>
  </FormControl>
);

export default FormControlNoInput;
