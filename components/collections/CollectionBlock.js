import { useContext } from "react";
import { ShopContext } from "contexts/ShopContext";
import RichText from "components/RichText";
import CollectionCard from "components/collections/CollectionCard";
import Loading from "components/ui/Loading";
import { Grid } from "@chakra-ui/react";

const CollectionBlock = () => {
  const { collections } = useContext(ShopContext);

  return (
    <>
      <RichText
        heading="801 Pickleball's Product Collections"
        text="Hoodies, T-Shirts, Stickers and more..."
        mb="1rem"
      />

      <Grid p="1rem" templateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}>
        {collections.length === 0 ? (
          <Loading />
        ) : (
          collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))
        )}
      </Grid>
    </>
  );
};

export default CollectionBlock;
