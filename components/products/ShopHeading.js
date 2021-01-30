import { Text, Center } from "@chakra-ui/react";

const ShopHeading = ({ collectionId, collections }) => {
  const displayHeading = () => {
    if (!collectionId) return "All Products";

    return (
      collections.length > 0 &&
      collections.filter((c) => c.id === collectionId)[0].title
    );
  };
  return (
    <Center mb="1rem">
      <Text fontSize="3xl">{displayHeading()}</Text>
    </Center>
  );
};

export default ShopHeading;
