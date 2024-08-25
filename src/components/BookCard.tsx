import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { ReadingLogEntry } from "./BookGrid";

interface Props {
  book: ReadingLogEntry;
}

const BookCard = ({ book }: Props) => {
  return (
    <Card borderRadius="10px" overflow="hidden">
      <Image
        src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-L.jpg`}
      />
      <CardBody
      //   bgColor="aqua"
      >
        <Heading fontSize="2xl">~~{book.work.title}~~</Heading>
        <HStack marginY={5}>
          <Heading fontSize="xs">Authored By:</Heading>
          {book.work.author_names && (
            <Text>{book.work.author_names.join(", ")}</Text>
          )}
        </HStack>
        <Text>{book.work.first_published_year}</Text>
      </CardBody>
    </Card>
  );
};

export default BookCard;
