import { Select, FormControl, FormLabel } from "@chakra-ui/react";

const VariantOptions = ({ label, handleChange, variant }) => (
  <FormControl>
    <FormLabel>{label}</FormLabel>
    <Select onChange={(e) => handleChange(e.target.value)}>
      {variant?.length > 0 &&
        variant.map((v, i) => (
          <option key={`prod_variant_${v.id}`} value={i}>
            {v.title}
          </option>
        ))}
    </Select>
  </FormControl>
);

export default VariantOptions;
