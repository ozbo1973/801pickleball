import { useRouter } from "next/router";
import { COLLECTION_PATH } from "config";
import Link from "next/link";
import { Box, Stack, Heading, Select } from "@chakra-ui/react";

const CollectionMenu = ({ collections }) => {
  const router = useRouter();
  const shopPath = "/shop";
  const collectionPath = COLLECTION_PATH;

  const handleOnSelect = (e) => {
    const val = e.target.value;
    const path = !val
      ? shopPath
      : {
          pathname: !val ? shopPath : collectionPath,
          query: { collectionHandle: val },
        };
    router.push(path);
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
              <option key={`mbOpt_${c.id}`} value={c.handle}>
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
          displayMenuItem(collection.id, collection.handle, collection.title)
        )}
    </Stack>
  );

  const displayMenuItem = (id = null, handle, title = "All Products") => (
    <Link
      key={`dtOpt_${id}`}
      href={
        !id
          ? shopPath
          : {
              pathname: collectionPath,
              query: { collectionHandle: handle },
            }
      }
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
