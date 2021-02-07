import { useRemoveCheckout } from "config/hooks";
import BaseLayout from "components/layout/BaseLayout";
import Loading from "components/ui/Loading";
import Button from "components/ui/MainButton";
import { Box, Heading, VStack, Center } from "@chakra-ui/react";

const completed = () => {
  const orderStatus = useRemoveCheckout("/products", {});

  const displayContent = () => {
    orderStatus.loading ? (
      <Loading />
    ) : (
      <>
        <Heading>Order Completion details are sent through email.</Heading>

        <Button action={() => router.push("/products")} size="lg">
          Go To Shop
        </Button>
      </>
    );
  };

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
            {displayContent()}
          </VStack>
        </Center>
      </Box>
    </BaseLayout>
  );
};

export default completed;
