import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { currentCollection } from "config/helpers";
import { ShopContext } from "contexts/ShopContext";
import BaseLayout from "components/layout/BaseLayout";
import CollectionMenu from "components/products/CollectionMenu";
import ProductCard from "components/products/ProductCard";
import Loading from "components/ui/Loading";
import { Box, Wrap, WrapItem, VStack, Center, Text } from "@chakra-ui/react";

const Shop = () => {
  const {
    fetchAllProducts,
    fetchCollectionById,
    products,
    collections,
  } = useContext(ShopContext);
  const router = useRouter();
  const { collectionId = null } = router.query;
  const { title, description } = currentCollection(collectionId, collections);

  const seo = {
    title: `Shop 801 Pickleball - ${title}`,
    description,
  };

  useEffect(() => {
    if (!collectionId) {
      fetchAllProducts();
    } else {
      fetchCollectionById(collectionId, 1);
    }
  }, [collectionId]);

  const displayProducts = () => {
    return !products ? (
      <Loading />
    ) : (
      products.map((product) => (
        <WrapItem key={`wrap_${product.id}`}>
          <ProductCard product={product} />
        </WrapItem>
      ))
    );
  };

  return (
    <BaseLayout seo={seo}>
      <Box p="1rem">
        <VStack p="2rem">
          <Center mb="1rem">
            <Text fontSize="3xl">{title}</Text>
          </Center>

          <CollectionMenu />
        </VStack>

        <Wrap justify="center">{displayProducts()}</Wrap>
      </Box>
    </BaseLayout>
  );
};

export default Shop;
