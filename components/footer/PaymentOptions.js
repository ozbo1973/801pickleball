import React from "react";
import { creditCardImages } from "config/helpers";
import { Flex, Box, Image, Spacer, Text, VStack } from "@chakra-ui/react";

const PaymentOptions = () => {
  const creditCards = Object.keys(creditCardImages);

  const displayCreditCards = () =>
    creditCards.map((card, i) => (
      <Box w="100%" key={card}>
        <Image src={creditCardImages[card]} w={9} h={5} />
        {i !== creditCards.length && <Spacer />}
      </Box>
    ));

  return (
    <VStack p="2rem">
      <Text>Powered by Shopify</Text>
      <Flex px="1rem" w="100%">
        {displayCreditCards()}
      </Flex>
    </VStack>
  );
};

export default PaymentOptions;
