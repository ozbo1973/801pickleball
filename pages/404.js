import { useRouter } from "next/router";
import BaseLayout from "components/layout/BaseLayout";
import Button from "components/ui/MainButton";
import CenterItem from "components/layout/CenterItem";
import { Heading } from "@chakra-ui/react";

const Error404 = () => {
  const router = useRouter();
  return (
    <BaseLayout>
      <CenterItem>
        <Heading>404 Error: Page Not found</Heading>

        <Button action={() => router.push("/shop")} size="lg">
          Return To Shop
        </Button>
      </CenterItem>
    </BaseLayout>
  );
};

export default Error404;
