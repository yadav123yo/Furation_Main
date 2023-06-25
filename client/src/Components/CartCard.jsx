import {
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Image,
  Text,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart, updateCartItem } from "../Redux/Cart/action";

const CartCard = ({ cart }) => {
  const [qty, setQty] = useState(cart.qty);
  const toast = useToast();

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItemFromCart(id));
    toast({
      title: "Remove Success.",
      description: `Remove Item id: ${id} from Cart.`,
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

  const handleIncQty = () => {
    setQty(qty + 1);
  };

  const handleDecQty = () => {
    setQty(qty - 1);
  };

  useEffect(() => {
    dispatch(updateCartItem(cart._id, qty));
  }, [qty]);

  return (
    <Box
      templateRows="repeat(4, 1fr)"
      alignItems="center"
      justifyContent={"space-between"}
      p={4}
      width={"full"}
      gap={2}
      mb={2}
      boxShadow={"lg"}
    >
     
        <Image
          width={"80%"}
          height={"60%"}
          alt={cart.title}
          src={cart.image}
        />
     
        <Text mt={"10%"} as={"p"} fontSize={"lg"} ml={"10%"}>
          Director:-{" "}
          {cart.title.length < 8 ? cart.title : `${cart.title.slice(0, 9)}...`}
        </Text>
    
        <ButtonGroup
          display="flex"
          flexDir={{
            base: "column",
            sm: "row",
          }}
          alignItems="center"
          gap="5px"
          mt={"10%"}
          ml={"10%"}
        >
          <Button
            isDisabled={cart.qty <= 1}
            colorScheme={"green"}
            variant="solid"
            onClick={handleDecQty}
            size={"sm"}
          >
            -
          </Button>
          <Button variant="solid" size={"sm"}>
            {cart.qty}
          </Button>
          <Button
            isDisabled={cart.qty > 9}
            colorScheme="green"
            variant="solid"
            size={"sm"}
            onClick={handleIncQty}
          >
            +
          </Button>
          <CloseButton
          bg={"red"}
          border={"1px"}
          size="md"
          variant="outline"
          onClick={() => handleRemove(cart._id)}
        />
        </ButtonGroup>
      
       
    </Box>
  );
};

export default CartCard;
