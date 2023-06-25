import React, { useEffect, useState } from "react";
import BookLists from "../Components/BookLists";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../Redux/Books/action";

const Home = () => {
  const [allBookData, setBookData] = useState([]);
  const { loading, allBooks, filterData } = useSelector((store) => store.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  useEffect(() => {
    if (filterData.length > 0) {
      setBookData(filterData);
    } else {
      setBookData(allBooks);
    }
  }, [filterData, allBooks]);


  return <BookLists books={allBookData} />;
};

export default Home;
