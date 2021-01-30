import { useRouter } from "next/router";
import BaseLayout from "components/layout/BaseLayout";
import Button from "components/ui/MainButton";
import { Box, Center, Heading, VStack } from "@chakra-ui/react";

const Error404 = () => {
  const router = useRouter();
  return (
    <BaseLayout>
      <Box p="3rem" h="50vh" position="relative">
        <Center>
          <VStack
            spacing={4}
            position="absolute"
            top="50%"
            transform="translate(0,-50%)"
          >
            <Heading>404 Error: Page Not found</Heading>

            <Button action={() => router.push("/products")} size="lg">
              Go To Shop
            </Button>
          </VStack>
        </Center>
      </Box>
    </BaseLayout>
  );
};

export default Error404;
