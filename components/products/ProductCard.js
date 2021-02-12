import { useState } from "react";
import Link from "next/link";
import VariantOptions from "components/ui/VariantOptions";
import AddToCartButton from "components/ui/AddToCartButton";
import NumberInput from "components/ui/NumberInput";
import { Box, Badge, Image } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  return (
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
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            In Stock
          </Badge>

          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            Other Data
          </Box>
        </Box>

        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
          {product.title}
        </Box>

        <Box>
          {product.variants[0].price}
          <Box as="span" color="gray.600" fontSize="sm">
            / wk
          </Box>
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
            variant={product.variants}
            handleChange={setSize}
          />
          <NumberInput
            label="Quantity"
            handleInput={setQuantity}
            defaultValue={quantity}
          />
        </Box>

        <AddToCartButton
          product={product.variants[size]}
          quantity={quantity}
          size="sm"
          w="100%"
        />
      </Box>
    </Box>
  );
};

export default ProductCard;
