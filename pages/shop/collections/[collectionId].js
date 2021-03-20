import { getCollectionById, getCollections } from "config/api";
import { useUpdateState } from "config/hooks";
import BaseLayout from "components/layout/BaseLayout";
import ShopLayout from "components/layout/ShopLayout";

const CollectionPage = (props) => {
  const { products, collections, collection, errMsg } = props;
  useUpdateState({ products, collections });

  const seo = {
    title: `Shop 801 Pickleball - ${collection.title}`,
    description: collection.description,
    keywords: `,801pickleball products,801pickleball ${collection.title}`,
  };

  if (errMsg.length > 0) {
    return <div>Error Occurred</div>;
  }

  return (
    <BaseLayout seo={seo}>
      <ShopLayout
        collections={collections}
        products={products}
        title={collection.title}
      />
    </BaseLayout>
  );
};

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const { collections, collectionErr = null } = await getCollections();

  // Get the paths we want to pre-render based on posts
  const paths = collections.map((c) => ({
    params: { collectionId: c.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const { collectionId } = context.params;
  let errMsg = [];

  /* get collections for menu and products */
  const { collections, collectionErr = null } = await getCollections();
  if (collectionErr) errMsg.push("Issue with Collections");

  /* get products from selected collection */
  const { collection, collectionIdErr } = await getCollectionById(
    collectionId,
    1
  );
  if (collectionIdErr) errMsg.push("Issue with Collections");

  return {
    props: { collections, products: collection.products, collection, errMsg },
    revalidate: 1800,
  };
}

export default CollectionPage;
