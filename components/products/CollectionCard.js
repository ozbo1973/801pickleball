import Link from "next/link";
import { Text, Box, Image, Center } from "@chakra-ui/react";

const CollectionCard = ({ collection }) => {
  return (
    <Link
      href={{
        pathname: `/products/`,
        query: { collectionId: collection.id },
      }}
    >
      <Box
        position="relative"
        cursor="pointer"
        _hover={{ opacity: "80%" }}
        textAlign="center"
        h="100%"
        maxWidth="sm"
      >
        <Center>
          <Image
            box="md"
            src={collection.image.src}
            fallbackSrc="https://via.placeholder.com/150"
            objectFit="contain"
          />
        </Center>
        <Text fontWeight="bold" w="100%">
          {collection.title}
        </Text>
        <Text fontWeight="bold" color="brand.dark.500" w="100%">
          {collection.description}
        </Text>
      </Box>
    </Link>
  );
};

export default CollectionCard;
