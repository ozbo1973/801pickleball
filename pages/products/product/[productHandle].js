import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "contexts/ShopContext";
import BaseLayout from "components/layout/BaseLayout";
import CollectionMenu from "components/collections/CollectionMenu";
import SingleProduct from "components/products/SingleProduct";
import { Box, VStack } from "@chakra-ui/react";

const ProductPage = () => {
  const { fetchProductByHandle, product } = useContext(ShopContext);
  const router = useRouter();
  const { productHandle } = router.query;

  useEffect(() => {
    fetchProductByHandle(productHandle);
  }, [productHandle]);

  const seo = {
    title: `Shop 801 Pickleball - ${product?.title}`,
    description: product?.description,
  };

  return (
    <BaseLayout seo={seo}>
      <Box p={[0, "2rem"]} py="2rem">
        <VStack>
          <Box mb={["1rem", "3rem"]}>
            <CollectionMenu />
          </Box>

          <SingleProduct product={product} />
        </VStack>
      </Box>
    </BaseLayout>
  );
};

export default ProductPage;
