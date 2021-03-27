import Link from "next/link";
import { UNDER_CONSTRUCTION, COLLECTION_PATH } from "config";
import Image from "next/image";
import { Text, Box, Center } from "@chakra-ui/react";

const CollectionCard = ({ collection }) => {
  const pathname = UNDER_CONSTRUCTION ? "/" : COLLECTION_PATH;
  return (
    <Link
      href={{
        pathname,
        query: { collectionHandle: collection.handle },
      }}
    >
      <Box
        position="relative"
        cursor="pointer"
        _hover={{ opacity: "80%" }}
        textAlign="center"
        h="100%"
        maxWidth="sm"
        p={3}
      >
        <Center>
          <Box boxSize="xs" pos="relative">
            <Image
              // box="md"
              layout="fill"
              src={collection.image.src}
              alt={collection.title}
              objectFit="contain"
            />
          </Box>
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
