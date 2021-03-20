import { fetchAllProducts, getCollections } from "config/api";
import { useUpdateState } from "config/hooks";
import BaseLayout from "components/layout/BaseLayout";
import ShopLayout from "components/layout/ShopLayout";

const Shop = (props) => {
  const { products, collections, errMsg } = props;
  const title = "All Products";
  useUpdateState({ products, collections });

  const seo = {
    title,
    description:
      "Shop all products related to line of 801 Pickleball clothing and soft goods. Includes t-shirts, hoodies, tank tops, hats etc...",
  };

  if (errMsg.length > 0) {
    return <div>Error Occurred</div>;
  }

  return (
    <BaseLayout seo={seo}>
      <ShopLayout collections={collections} products={products} title={title} />
    </BaseLayout>
  );
};

export async function getStaticProps() {
  let errMsg = [];

  /* get collections for menu and products */
  const { collections, collectionErr = null } = await getCollections();
  if (collectionErr) errMsg.push("Issue with Collections");

  const { products, productsErr } = await fetchAllProducts();
  if (productsErr) errMsg.push("Issue with Getting Products");

  return {
    props: { collections, products, errMsg },
    revalidate: 1800,
  };
}

export default Shop;
