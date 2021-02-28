import { useEffect, useContext } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { ShopContext } from "contexts/ShopContext";
import { Box, Stack, Heading, Select } from "@chakra-ui/react";

const CollectionMenu = () => {
  const { fecthAllCollectionNoProducts, collections } = useContext(ShopContext);
  const router = useRouter();

  useEffect(() => {
    collections.length === 0 && fecthAllCollectionNoProducts();
  }, [fecthAllCollectionNoProducts]);

  const handleOnSelect = (e) => {
    const val = e.target.value === "all" ? null : e.target.value;
    router.push({
      pathname: "/products",
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
          <option value="all">View all products</option>
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
      href={{ pathname: "/products", query: { collectionId: id } }}
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
