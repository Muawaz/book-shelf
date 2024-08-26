import React from "react";
import useBooks from "../hooks/useBooks";
import { Text } from "@chakra-ui/react";

const GenreList = () => {
  const { genres } = useBooks();

  return (
    <ul>
      {genres.map((genre, index) => (
        <li key={index}>{genre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
