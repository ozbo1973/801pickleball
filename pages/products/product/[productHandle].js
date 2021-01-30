import { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import { ShopContext } from "contexts/ShopContext";

import BaseLayout from "components/layout/BaseLayout";
import CollectionMenu from "components/products/CollectionMenu";
import Loading from "components/ui/Loading";
import SingleProduct from "components/products/SingleProduct";

import { Box, VStack } from "@chakra-ui/react";

const ProductPage = () => {
  const { fetchProductByHandle, product } = useContext(ShopContext);
  const router = useRouter();
  const { productHandle } = router.query;

  const loading = !product || productHandle !== product.handle;

  useEffect(() => {
    fetchProductByHandle(productHandle);
  }, [productHandle]);

  return (
    <BaseLayout>
      <Box p={[0, "2rem"]} py="2rem">
        <VStack>
          <Box mb={["1rem", "3rem"]}>
            <CollectionMenu />
          </Box>

          {loading && <Loading />}
          {!loading && <SingleProduct product={product} />}
        </VStack>
      </Box>
    </BaseLayout>
  );
};

export default ProductPage;
