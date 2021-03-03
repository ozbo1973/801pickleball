import BaseLayout from "components/layout/BaseLayout";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  const seo = {
    title: `Shop 801 Pickleball - About`,
    description:
      "The origin of 801pickleball and the Campiani family idea behind their passion of pickleball and business.",
  };
  return (
    <BaseLayout seo={seo}>
      <Box>
        <Heading>About 801pickleball</Heading>
        <Text>Story coming soon.</Text>
      </Box>
    </BaseLayout>
  );
};

export default About;
