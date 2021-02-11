import { useState } from "react";
import Link from "next/link";
import VariantOptions from "components/ui/VariantOptions";
import AddToCartButton from "components/ui/AddToCartButton";
import NumberInput from "components/ui/NumberInput";
import { Box, Badge, Image, Text, Flex } from "@chakra-ui/react";

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
      display="flex"
      flexDirection="column"
    >
      <Box p="1rem" h="35%" overflow="hidden" cursor="pointer" flexShrink={0}>
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
          />
        </Link>
      </Box>

      <Box py="2rem" px="1rem" flexGrow={1}>
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            ${product.variants[0].price}
          </Badge>

          <Text
            color="brand.dark.600"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="md"
            textTransform="uppercase"
            ml="2"
            as="h4"
            lineHeight="tight"
          >
            {product.title}
          </Text>
        </Box>

        <Text p="1.5rem" color="brand.dark.700" mt="2rem">
          {product.description}
        </Text>
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
