import Link from "next/link";
import { Box, Badge, Image } from "@chakra-ui/react";

const ProductCard = ({ product }) => {
  return (
    <Box cursor="pointer" h="100%">
      <Link
        href={{
          pathname: "/products/product/[productHandle]",
          query: { productHandle: product.handle },
        }}
      >
        <Box
          h="100%"
          maxW="sm"
          borderWidth="1px"
          borderRadius="lg"
          overflow="hidden"
        >
          <Image
            objectFit="contain"
            src={product.images[0].src}
            alt={product.title}
          />

          <Box p="6">
            <Box d="flex" alignItems="baseline">
              <Badge borderRadius="full" px="2" colorScheme="teal">
                ${product.variants[0].price}
              </Badge>

              <Box
                color="brand.dark.600"
                fontWeight="semibold"
                letterSpacing="wide"
                fontSize="xs"
                textTransform="uppercase"
                ml="2"
                as="h4"
                lineHeight="tight"
              >
                {product.title}
              </Box>
            </Box>

            <Box color="brand.dark.700" mt="1rem">
              {product.description}
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default ProductCard;
