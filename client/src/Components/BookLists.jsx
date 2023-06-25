import { Grid } from "@chakra-ui/react";
import React from "react";
import BookCard from "./Card";

const BookList = ({ books }) => {
  return (
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
      {books.map((book, i) => (
        <BookCard key={i} book={book} />
      ))}
    </Grid>
  );
};

export default BookList;
