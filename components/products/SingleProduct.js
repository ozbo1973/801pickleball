import { useState } from "react";
import { useSelectedVariant } from "config/hooks";
import Loading from "components/ui/Loading";
import VariantOptions from "components/ui/VariantOptions";
import NumberInput from "components/ui/NumberInput";
import NoInputControl from "components/ui/FormControlNoInput";
import AddToCart from "components/ui/AddToCartButton";
import { Grid, Heading, Image, Flex, Stack } from "@chakra-ui/react";

const SingleProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { selectedVariant, setSize, loadingProduct } = useSelectedVariant(
    product
  );

  return loadingProduct ? (
    <Loading />
  ) : (
    <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} m="auto">
      <Flex justifyContent="center" alignItems="center">
        <Image src={product.images[0].src} />
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px="2rem"
      >
        <Heading mt="1rem" fontSize={["1rem", "2rem"]} pb={["1rem", "2rem"]}>
          {product.title}
        </Heading>

        <Stack direction="row" spacing={5}>
          <NoInputControl label="Price" info={`$${selectedVariant.price}`} />

          <VariantOptions
            label={"Size"}
            product={product}
            handleChange={setSize}
          />

          <NumberInput
            label="Quantity"
            handleInput={setQuantity}
            defaultValue={quantity}
          />
        </Stack>
        <NoInputControl color="brand.dark.300" info={product.description} />

        <AddToCart product={selectedVariant} quantity={quantity} showCart />
      </Flex>
    </Grid>
  );
};

export default SingleProduct;
