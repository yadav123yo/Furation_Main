import {
  Button,
  Container,
  FormControl,
  Heading,
  Input,
  VStack,
  useToast,
} from "@chakra-ui/react"; 
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signUp } from "../Redux/Auth/action";

// Initial state 
const initState = {
  name: "",
  email: "",
  password: "",
};

const SignUp = () => {
  const [signUPDetails, setSignUPDetails] = useState(initState);
  const { name, email, password } = signUPDetails;
  const { loading, error } = useSelector((store) => store.auth);
  const { message, isError } = error;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUPDetails({ ...signUPDetails, [name]: value });
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    if (name === "" || email === "" || password === "") {
      return alert("fill both credentials");
    }
    dispatch(signUp(signUPDetails));
    toast({
      title: "Sign Up Success.",
      description: "Now you can Login.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
    navigate("/login");
  };

  useEffect(() => {
    if (isError) {
      toast({
        title: "Login Failed.",
        description: `${message}`,
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    }
  }, [isError]);

  return (
    <Container
      width="100%"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack
        width="full"
        maxWidth="400px"
        borderRadius="lg"
        boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
        p={4}
      >
        <Heading
          fontWeight="bolder"
          textAlign="center"
          fontSize="20px"
          mb="20px"
        >
          SIGN UP FORM
        </Heading>
        <FormControl p={2}>
          <Input
            name="name"
            value={name}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="text"
            placeholder="Enter Username"
            borderRadius="lg"
            focusBorderColor="teal.100"
            required
          />
        </FormControl>
        <FormControl p={2}>
          <Input
            name="email"
            value={email}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="email"
            placeholder="Enter Email"
            borderRadius="lg"
            focusBorderColor="teal.100"
            required
          />
        </FormControl>
        <FormControl p={2}>
          <Input
            name="password"
            value={password}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            type="password"
            placeholder="Enter password"
            borderRadius="lg"
            focusBorderColor="teal.100"
            required
          />
        </FormControl>

        <FormControl>
          <Button
            // isLoading={loading}
            loadingText="Submitting"
            width="full"
            p={4}
            borderRadius="lg"
            colorScheme="teal"
            _hover={{
              bg: "teal.300",
              color: "white",
            }}
            variant="outline"
            mt={4}
            onClick={handleSignUp}
          >
            SIGN IN FORM
          </Button>
        </FormControl>
      </VStack>
    </Container>
  );
};

export default SignUp;
