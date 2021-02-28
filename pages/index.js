import { useContext, useEffect } from "react";
import { ShopContext } from "contexts/ShopContext";
import BaseLayout from "components/layout/BaseLayout";
import Hero from "components/home/Hero";
import CollectionBlock from "components/collections/CollectionBlock";
import SupportBlock from "components/support";
import { Box } from "@chakra-ui/react";

const Home = () => {
  const { fecthAllCollectionNoProducts, fetchCollectionById } = useContext(
    ShopContext
  );

  useEffect(() => {
    fecthAllCollectionNoProducts();
  }, [fetchCollectionById]);

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

export default Home;
