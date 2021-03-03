import { getCollections } from "config/api";
import { useUpdateState } from "config/hooks";
import BaseLayout from "components/layout/BaseLayout";
import Hero from "components/home/Hero";
import CollectionBlock from "components/collections/CollectionBlock";
import SupportBlock from "components/support";
import { Box } from "@chakra-ui/react";

const Home = ({ collections }) => {
  useUpdateState({ collections });

  return (
    <BaseLayout>
      <Box>
        <Hero />
        <CollectionBlock />
        <SupportBlock />
      </Box>
    </BaseLayout>
  );
};

export async function getStaticProps(context) {
  const { collections, collectionErr = null } = await getCollections();
  if (collectionErr) return { notFound: true };

  return {
    props: { collections }, // will be passed to the page component as props
  };
}

export default Home;
