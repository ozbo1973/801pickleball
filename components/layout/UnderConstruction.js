import HeroUC from "components/home/Hero-uc";
import SupportBlock from "components/support";
import CollectionBlock from "components/collections/CollectionBlock";
import { Box } from "@chakra-ui/react";

const UnderConstruction = () => {
  return (
    <Box>
      <HeroUC />
      <CollectionBlock />
      <SupportBlock />
    </Box>
  );
};

export default UnderConstruction;
