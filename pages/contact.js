import BaseLayout from "components/layout/BaseLayout";
import OtherPageLayout from "components/layout/other-page-layout";
import { Text, Link } from "@chakra-ui/react";

const Contact = () => {
  const seo = {
    title: `Shop 801 Pickleball - Contact`,
    description:
      "The origin of 801pickleball and the Campiani family idea behind their passion of pickleball and business.",
  };
  const imageObj = {
    alt: "Kevin Campiani owner of 801pickleball.",
    width: 150,
    height: 150,
  };

  return (
    <BaseLayout seo={seo}>
      <OtherPageLayout boxSize="9rem" imageObj={imageObj} heading="Contact Us">
        <Text m={2}>
          <address>
            Send email to{" "}
            <Link
              ml={2}
              href="mailto:kc@xbalm.com?subject=801 Pickleball inquiry"
            >
              kc@xbalm.com
            </Link>
          </address>
        </Text>
      </OtherPageLayout>
    </BaseLayout>
  );
};

export default Contact;
