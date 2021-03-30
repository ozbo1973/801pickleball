import BaseLayout from "components/layout/BaseLayout";
import OtherPageLayout from "components/layout/other-page-layout";
import { Box, Heading, Text } from "@chakra-ui/react";

const About = () => {
  const seo = {
    title: `Shop 801 Pickleball - About`,
    description:
      "The origin of 801pickleball and the Campiani family idea behind their passion of pickleball and business.",
  };
  const imageObj = {
    alt: "Campiani family, owner of 801pickleball.",
    width: 150,
    height: 150,
  };

  return (
    <BaseLayout seo={seo}>
      <OtherPageLayout heading="About 801 Pickleball" imageObj={imageObj}>
        <Text>Story coming soon.</Text>
      </OtherPageLayout>
    </BaseLayout>
  );
};

export default About;
