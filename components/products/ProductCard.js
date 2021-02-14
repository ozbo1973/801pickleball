import { useState } from "react";
import Link from "next/link";
import { OPTION_LABELS } from "config";
import { useSelectedVariant } from "config/hooks";
import VariantOptions from "components/ui/VariantOptions";
import AddToCartButton from "components/ui/AddToCartButton";
import Loading from "components/ui/Loading";
import NumberInput from "components/ui/NumberInput";
import { Box, Badge, Image } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const { selectedVariant, setSize, loadingProduct } = useSelectedVariant(
    product,
    OPTION_LABELS
  );

  return loadingProduct ? (
    <Loading />
  ) : (
    <Box
      h="100%"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      margin="auto"
      display="flex"
      flexDirection="column"
    >
      <Link
        href={{
          pathname: "/products/product/[productHandle]",
          query: { productHandle: product.handle },
        }}
      >
        <Image
          objectFit="contain"
          src={product.images[0].src}
          alt={product.title}
          overflow="hidden"
          flexShrink={0}
          boxSize="xs"
          m="0 auto"
          cursor="pointer"
        />
      </Link>

      <Box p="3" flexGrow={1}>
        <Box d="flex" alignItems="baseline" justifyContent="space-between">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            as="h4"
            textTransform="uppercase"
            mr="2"
          >
            {product.title}
          </Box>

          <Badge
            p={1}
            borderRadius="full"
            px="2"
            variant="outline"
            border="2px brand.mix.b solid"
            color="brand.mix.a"
          >
            $ {selectedVariant?.price || 0}
          </Badge>
        </Box>

        <Box d="flex" mt="2" alignItems="center">
          <Box mt="2" color="gray.600" fontSize="sm">
            {product.description}
          </Box>
        </Box>
      </Box>

      <Box p="1rem" flexShrink={0}>
        <Box mb="2.5rem" d="flex" alignItems="baseline">
          <VariantOptions
            label={"Size"}
            product={product}
            handleChange={setSize}
            labelOverride={OPTION_LABELS.size}
          />
          <NumberInput
            label="Quantity"
            handleInput={setQuantity}
            defaultValue={quantity}
          />
        </Box>

        <AddToCartButton
          product={selectedVariant}
          quantity={quantity}
          size="sm"
          w="100%"
          showCart
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
