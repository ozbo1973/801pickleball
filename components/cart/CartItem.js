import Image from "next/image";
import { Grid, Text, Flex, Icon, Box, VStack } from "@chakra-ui/react";
import { MdDelete } from "react-icons/md";

const CartItem = ({ item, removeAction }) => (
  <Grid
    key={`${item.id}_checkout`}
    templateColumns="repeat(2,1fr)"
    gap={1}
    mb="1rem"
    p=".5rem"
    border="1px solid"
    borderColor="brand.dark.600"
  >
    <Flex alignItems="center" justifyContent="center">
      <Box pos="relative" boxSize="150px" borderRadius="full">
        <Image
          layout="fill"
          src={item.variant.image.src}
          alt={item.title}
          objectFit="scale-down"
        />
      </Box>
    </Flex>

    <Flex alignItems="center" justifyContent="center">
      <VStack spacing={3}>
        <Text fontWeight="bold">{item.title}</Text>
        <Text>Quanity: {item.quantity} </Text>
        <Text>Price: ${item.variant.price * item.quantity}</Text>
        <Text>Size: {item.variant.title}</Text>
        <Box textAlign="right" w="100%" pr="1rem">
          <Icon
            onClick={() => removeAction([item.id])}
            cursor="pointer"
            as={MdDelete}
            color="#D52320"
            boxSize={["2.2rem", "1.5rem"]}
          />
        </Box>
      </VStack>
    </Flex>
  </Grid>
);

export default CartItem;
