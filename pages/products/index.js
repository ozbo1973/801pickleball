import {
  fetchAllProducts,
  getCollections,
  getCollectionById,
} from "config/api";
import { useUpdateState } from "config/hooks";
import BaseLayout from "components/layout/BaseLayout";
import CollectionMenu from "components/collections/CollectionMenu";
import ProductCard from "components/products/ProductCard";
import Loading from "components/ui/Loading";
import { Wrap, WrapItem, VStack, Center, Text } from "@chakra-ui/react";

const Shop = ({ products, collections, seo, title }) => {
  useUpdateState(products, collections);

  const displayProducts = () =>
    products?.length === 0 ? (
      <Loading />
    ) : (
      products.length > 0 &&
      products.map((product) => (
        <WrapItem mb="1rem" key={`wrap_${product.id}`}>
          <ProductCard product={product} />
        </WrapItem>
      ))
    );

  return (
    <BaseLayout seo={seo}>
      <VStack p="2rem">
        <Center display={["none", "block"]} mb="1rem">
          <Text fontSize="3xl">{title}</Text>
        </Center>

        <CollectionMenu collections={collections} />
      </VStack>

      <Wrap spacing={2} justify="center">
        {displayProducts()}
      </Wrap>
    </BaseLayout>
  );
};

export async function getServerSideProps(context) {
  const { collectionId = null } = context.query;
  let products = [];
  let collection = null;
  let errMsg = [];

  const defaultSEO = {
    title: "All Products",
    description: "Shop all products related to 801 Pickleball.",
  };

  /* get collections for menu and products */
  const { collections, collectionErr = null } = await getCollections();
  if (collectionErr) errMsg.push("Issue with Collections");

  /* check if collection id to determin which products to display */
  if (collectionId) {
    const colResult = await getCollectionById(collectionId, 1);
    if (colResult.collectionIdErr) errMsg.push("Issue with Collection by ID");

    if (errMsg.length === 0) {
      collection = colResult.collection;
      products = colResult.collection.products;
    }
  } else {
    const res = await fetchAllProducts();
    if (res.productErr) errMsg.push("Issue with Getting Products");

    if (errMsg.length === 0) {
      products = res.products;
    }
  }

  /* If any errors found go to page not found. */
  if (errMsg.length > 0) {
    return { notFound: true };
  }

  const { title, description } = collection || defaultSEO;

  const seo = {
    title: `Shop 801 Pickleball - ${title}`,
    description,
    keywords: `,801pickleball products,801pickleball ${title}`,
  };

  return {
    props: { products, collections, seo, title }, // will be passed to the page component as props
  };
}

export default Shop;
