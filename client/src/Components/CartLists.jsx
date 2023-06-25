import { Box, Button, Flex, Text, Grid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import CartCard from "./CartCard";

const CartLists = ({ cartItems, handleOrder }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cartItems
        .reduce((acc, el) => acc + Number(el.price * el.qty), 0)
        .toFixed(2)
    );
  }, [cartItems]);

  return (
    <Box>
      <Grid
      mt={"90px"}
      templateColumns={{
        base: "1fr",
        sm: "repeat(2, 1fr)",
        md: "repeat(3, 1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={4}
      p={2}
      justifyContent="center"
    >
   {cartItems.map((cart) => (
       <CartCard key={cart._id} cart={cart} />
      ))}


    </Grid>
    <Flex>
    <Button
          borderRadius="lg"
          colorScheme="red"
          _hover={{
            bg: "red.300",
            color: "white",
          }}
          variant="outline"
          onClick={handleOrder}
          margin={"auto"}
          mb={"5px"}
        >
          Place Order
        </Button>
        <Text mr={"10%"} fontSize={"bold"} color="black" as={"p"}>Total Amount:- $ {total}</Text>
    </Flex>
    </Box>
  );
};

export default CartLists;
