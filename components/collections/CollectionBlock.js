import { useContext } from "react";
import { ShopContext } from "contexts/ShopContext";
import RichText from "components/RichText";
import CollectionCard from "components/collections/CollectionCard";
import Loading from "components/ui/Loading";
import { Flex } from "@chakra-ui/react";

const CollectionBlock = () => {
  const { collections } = useContext(ShopContext);

  return (
    <>
      <RichText
        heading="801 Pickleball's Product Collections"
        text="Hoodies, T-Shirts, Stickers and more..."
        mb="1rem"
      />

      <Flex direction={["column", "row"]} justify="space-evenly">
        {collections?.length === 0 ? (
          <Loading />
        ) : (
          collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))
        )}
      </Flex>
    </>
  );
};

export default CollectionBlock;
