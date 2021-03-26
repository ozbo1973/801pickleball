import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelectedVariant } from "config/hooks";
import VariantOptions from "components/ui/VariantOptions";
import AddToCartButton from "components/ui/AddToCartButton";
import Loading from "components/ui/Loading";
import InventoryBadge from "components/ui/InventoryBadge";
import NumberInput from "components/ui/NumberInput";
import { Box, Badge, Flex } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const {
    selectedVariant,
    handleOptionChange,
    loadingProduct,
  } = useSelectedVariant(product);

  return loadingProduct ? (
    <Box maxW="md" margin="auto" display="flex" flexDirection="column">
      <Loading />
    </Box>
  ) : (
    <Box
      h="100%"
      maxW="sm"
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      // margin="0 auto"
      display="flex"
      flexDirection="column"
    >
      <Box w="100%" flexShrink={0}>
        <Link
          href={{
            pathname: "/products/product/[productHandle]",
            query: { productHandle: product.handle },
          }}
        >
          <a>
            <Box
              overflow="hidden"
              boxSize="15.625rem"
              m="0 auto"
              pos="relative"
            >
              <Image
                layout="fill"
                objectFit="contain"
                src={product.images[0].src}
                alt={product.title}
              />
            </Box>
          </a>
        </Link>
      </Box>

      <Box p={[3, 1]} flexGrow={1}>
        <Box d="flex" alignItems="baseline" justifyContent="space-between">
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            as="h4"
            textTransform="uppercase"
            mr={2}
          >
            {product.title}
          </Box>

          <Badge
            py={1}
            borderRadius="full"
            px={2}
            variant="outline"
            colorScheme="brand.dark"
          >
            $ {selectedVariant?.price || product.variants[0].price}
          </Badge>
        </Box>

        <Flex mt={2} w="100%" justifyContent="center">
          <InventoryBadge selectedVariant={selectedVariant} p={1} />
        </Flex>

        <Box d="flex" mt={2} alignItems="center">
          <Box p={2} color="gray.600" fontSize="sm">
            {product.description}
          </Box>
        </Box>
      </Box>

      <Box p="1rem" flexShrink={0}>
        <Box mb="2.5rem" d="flex" alignItems="baseline">
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
        </Box>

        <AddToCartButton
          disabled={!selectedVariant}
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
