import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";

const InputNumber = ({ label, handleInput, defaultValue }) => (
  <FormControl>
    <FormLabel>{label}:</FormLabel>
    <NumberInput
      onChange={(val) => handleInput(val)}
      defaultValue={defaultValue}
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  </FormControl>
);

export default InputNumber;
