import { Fragment } from "react";
import CollectionMenu from "components/collections/CollectionMenu";
import ProductCard from "components/products/ProductCard";
import { Wrap, WrapItem, VStack, Center, Text } from "@chakra-ui/react";

const ShopLayout = ({ collections, products, title }) => {
  return (
    <Fragment>
      <VStack p="2rem">
        <Center display={["none", "block"]} mb="1rem">
          <Text fontSize="3xl">{title}</Text>
        </Center>

        <CollectionMenu collections={collections} />
      </VStack>

      <Wrap spacing={2} justify="center">
        {products.map((product) => (
          <WrapItem mb="1rem" key={`wrap_${product.id}`}>
            <ProductCard product={product} />
          </WrapItem>
        ))}
      </Wrap>
    </Fragment>
  );
};

export default ShopLayout;
