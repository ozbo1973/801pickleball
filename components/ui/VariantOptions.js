import { Select, FormControl, FormLabel } from "@chakra-ui/react";

const VariantOptions = ({
  handleChange,
  product,
  getOption,
  disabled,
  hidden,
}) => {
  const { options } = product;
  const option = options[getOption];
  const label = option.name;

  return (
    <FormControl hidden={hidden || false}>
      <FormLabel>{label}</FormLabel>
      <Select
        disabled={disabled || false}
        defaultValue="Choose"
        onChange={(e) => handleChange({ [label]: e.target.value })}
      >
        <option value="Choose">Choose</option>
        {option.values.map((o) => (
          <option key={`prod_variant_${o.value}_${label}`} value={o.value}>
            {o.value}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default VariantOptions;
