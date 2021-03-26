import Hero from "components/home/Hero";
import SupportBlock from "components/support";
import CollectionBlock from "components/collections/CollectionBlock";
import { Box } from "@chakra-ui/react";

const UnderConstruction = () => {
  return (
    <Box>
      <Hero underConstruction />
      <CollectionBlock />
      <SupportBlock />
    </Box>
  );
};

export default UnderConstruction;
