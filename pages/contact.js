import BaseLayout from "components/layout/BaseLayout";
import { Box, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  const seo = {
    title: `Shop 801 Pickleball - Contact`,
    description:
      "The origin of 801pickleball and the Campiani family idea behind their passion of pickleball and business.",
  };
  return (
    <BaseLayout seo={seo}>
      <Box>
        <Heading>Contact Us</Heading>
        <Text>Email Address: </Text>
      </Box>
    </BaseLayout>
  );
};

export default Contact;
