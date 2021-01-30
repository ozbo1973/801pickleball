import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "contexts/ShopContext";
import BaseLayout from "components/layout/BaseLayout";
import CollectionMenu from "components/products/CollectionMenu";
import ProductCard from "components/products/ProductCard";
import ShopHeading from "components/products/ShopHeading";
import Loading from "components/ui/Loading";
import { Box, Wrap, WrapItem, VStack } from "@chakra-ui/react";

const Shop = () => {
  const {
    fetchAllProducts,
    fetchCollectionById,
    products,
    collections,
  } = useContext(ShopContext);
  const { collectionId = null } = useRouter().query;

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
    <BaseLayout>
      <Box p="1rem">
        <VStack p="2rem">
          <ShopHeading collectionId={collectionId} collections={collections} />
          <CollectionMenu />
        </VStack>

        <Wrap justify="center">{displayProducts()}</Wrap>
      </Box>
    </BaseLayout>
  );
};

export default Shop;
