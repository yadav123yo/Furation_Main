import { Button } from "@chakra-ui/react";
import { Box, Center, Heading, Text, Stack, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const EmptyCard = ({ name }) => {
  return (
    <Center py={12} mt={"10px"}>
      <Box
      
        role={"group"}
        mt={"50px"}
        p={6}
        maxW={"300px"}
        w={"full"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"230px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `https://statementclothing.net/images/cart.gif`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={230}
            width={282}
            objectFit={"cover"}
            src="https://statementclothing.net/images/cart.gif"
          />
        </Box>
        <Stack pt={10} align={"center"}>
         
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {`Your ${name} is Empaty`}
          </Heading>
          <Stack direction={"row"} align={"center"}>
            <Link to="/">
              <Button colorScheme="pink">Continue Shoping</Button>
            </Link>
          </Stack>
        </Stack>
      </Box>
    </Center>
  );
};

export default EmptyCard;
