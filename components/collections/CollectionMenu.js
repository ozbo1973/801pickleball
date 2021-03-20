import { useRouter } from "next/router";
import Link from "next/link";
import { Box, Stack, Heading, Select } from "@chakra-ui/react";

const CollectionMenu = ({ collections }) => {
  const router = useRouter();
  const shopPath = "/shop";
  const collectionPath = "/shop/collections/[collectionId]";

  const handleOnSelect = (e) => {
    const val = e.target.value;
    router.push({
      pathname: !val ? shopPath : collectionPath,
      query: { collectionId: val },
    });
  };

  const displayMobileMenu = () => {
    return (
      <Box display={["flex", "none"]}>
        <Select
          style={{ textAlignLast: "center" }}
          variant="unstyled"
          p={4}
          fontSize="1.5rem"
          onChange={handleOnSelect}
        >
          <option value="">View all products</option>
          {collections.length > 0 &&
            collections.map((c) => (
              <option key={`mbOpt_${c.id}`} value={c.id}>
                {c.title}
              </option>
            ))}
        </Select>
      </Box>
    );
  };

  const displayDeskTop = () => (
    <Stack
      display={["none", "flex"]}
      direction={["column", "row"]}
      spacing={[2, 5]}
    >
      {displayMenuItem()}
      {collections.length > 0 &&
        collections.map((collection) =>
          displayMenuItem(collection.id, collection.title)
        )}
    </Stack>
  );

  const displayMenuItem = (id = null, title = "All Products") => (
    <Link
      key={`dtOpt_${id}`}
      href={{
        pathname: !id ? shopPath : collectionPath,
        query: { collectionId: id },
      }}
    >
      <Box
        cursor="pointer"
        p={2}
        shadow="md"
        borderWidth="1px"
        borderRadius="md"
      >
        <Heading fontSize={["sm", "lg"]}>{title}</Heading>
      </Box>
    </Link>
  );

  return (
    <>
      {displayMobileMenu()}
      {displayDeskTop()}
    </>
  );
};

export default CollectionMenu;
