import { SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "./BookCard";
import BookCardSkeleton from "./BookCardSkeleton";
import BookCardContainer from "./BookCardContainer";
import useBooks from "../hooks/useBooks";

const BookGrid = () => {
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const { books, error, isLoading } = useBooks();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding="20px"
      >
        {isLoading &&
          skeletons.map((skeleton, index) => (
            <BookCardContainer key={index}>
              <BookCardSkeleton />
            </BookCardContainer>
          ))}
        {books.map((book, index) => (
          <BookCardContainer key={index}>
            <BookCard book={book} />
          </BookCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
