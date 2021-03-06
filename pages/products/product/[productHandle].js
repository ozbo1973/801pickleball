import {
  getCollections,
  fetchAllProducts,
  getProductByHandle,
} from "config/api";
import { useUpdateState } from "config/hooks";
import BaseLayout from "components/layout/BaseLayout";
import CollectionMenu from "components/collections/CollectionMenu";
import SingleProduct from "components/products/SingleProduct";
import { Box, VStack } from "@chakra-ui/react";

const ProductPage = ({ collections, product }) => {
  useUpdateState({ collections, product });

  const seo = {
    title: `Shop 801 Pickleball - ${product?.title}`,
    description: product?.description,
  };

  return (
    <BaseLayout seo={seo}>
      <Box p={[0, "2rem"]} py="2rem">
        <VStack>
          <Box mb={["1rem", "3rem"]}>
            <CollectionMenu collections={collections} />
          </Box>

          <SingleProduct product={product} />
        </VStack>
      </Box>
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { products } = await fetchAllProducts();

  // Get the paths we want to pre-render based on posts
  const paths = products.map((p) => ({
    params: { productHandle: p.handle },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { collections, collectionErr = null } = await getCollections();
  if (collectionErr) return { notFound: true };

  const { productHandle } = context.params;
  const { product, productHandleErr } = await getProductByHandle(productHandle);
  if (productHandleErr) return { notFound: true };

  return {
    props: { collections, product },
    revalidate: 100,
  };
}

export default ProductPage;
