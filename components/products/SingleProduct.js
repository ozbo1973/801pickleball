import { useState } from "react";
import Image from "next/image";
import { useSelectedVariant } from "config/hooks";
import Loading from "components/ui/Loading";
import VariantOptions from "components/ui/VariantOptions";
import NumberInput from "components/ui/NumberInput";
import NoInputControl from "components/ui/FormControlNoInput";
import InventoryBadge from "components/ui/InventoryBadge";
import AddToCart from "components/ui/AddToCartButton";
import { Grid, Box, Heading, Flex, Stack, Center } from "@chakra-ui/react";
import CenterItem from "components/layout/CenterItem";

const SingleProduct = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const {
    selectedVariant,
    handleOptionChange,
    loadingProduct,
  } = useSelectedVariant(product);

  return loadingProduct ? (
    <CenterItem>
      <Loading />
    </CenterItem>
  ) : (
    <Grid templateColumns={["repeat(1,1fr)", "repeat(2,1fr)"]} m="auto">
      <Flex justifyContent="center" alignItems="center">
        <Box pos="relative" width="50%" height="100%" overflow="hidden">
          <Image
            layout="fill"
            src={product.images[0].src}
            alt={product.title}
            objectFit="contain"
          />
        </Box>
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        px="2rem"
      >
        <Heading mt="1rem" fontSize={["1rem", "2rem"]} pb={["1rem", "2rem"]}>
          {product.title}
          <InventoryBadge selectedVariant={selectedVariant} />
        </Heading>

        <Stack direction="row" spacing={5}>
          <NoInputControl
            label="Price"
            info={`$${selectedVariant?.price || product.variants[0].price}`}
          />

          <VariantOptions
            product={product}
            handleChange={handleOptionChange}
            getOption={0}
            hidden={product.variants.length < 2}
          />

          <NumberInput
            label="Quantity"
            handleInput={setQuantity}
            defaultValue={quantity}
          />
        </Stack>
        <NoInputControl color="brand.dark.300" info={product.description} />

        <AddToCart
          disabled={!selectedVariant && !selectedVariant?.availableToSell}
          product={selectedVariant}
          quantity={quantity}
          showCart
        />
      </Flex>
    </Grid>
  );
};

export default SingleProduct;
