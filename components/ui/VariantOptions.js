import { Select, FormControl, FormLabel } from "@chakra-ui/react";

const VariantOptions = ({ label, handleChange, product, labelOverride }) => {
  const { options } = product;
  const match = labelOverride || label;
  const getOption =
    options?.length > 0 && options.filter((o) => o.name === match);

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Select onChange={(e) => handleChange(e.target.value)}>
        {getOption[0].values.map((o) => (
          <option key={`prod_variant_${o.value}_${label}`} value={o.value}>
            {o.value}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default VariantOptions;
