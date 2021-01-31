import { currentCollection } from "config/helpers";
import { Text, Center } from "@chakra-ui/react";

const ShopHeading = ({ collectionId, collections }) => {
  const { title } = currentCollection(collectionId, collections);
  return (
    <Center mb="1rem">
      <Text fontSize="3xl">{title}</Text>
    </Center>
  );
};

export default ShopHeading;
