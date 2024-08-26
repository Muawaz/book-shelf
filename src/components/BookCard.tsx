import {
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import useBooks, { ReadingLogEntry } from "../hooks/useBooks";
import BookRating from "./BookRating";

interface Props {
  book: ReadingLogEntry;
}

const BookCard = ({ book }: Props) => {
  return (
    <Card>
      <Image
        src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-L.jpg`}
      />
      <CardBody
      //   bgColor="aqua"
      >
        <Heading fontSize="2xl">~~{book.work.title}~~</Heading>
        <BookRating book={book} />
        <Divider marginY={1} borderWidth="2px" borderColor="aqua" />
        <HStack>
          <Heading fontSize="xs">Authored By:</Heading>
          {book.work.author_names && (
            <Text>{book.work.author_names.join(", ")}</Text>
          )}
        </HStack>
        <Text>{book.work.key}</Text>
      </CardBody>
    </Card>
  );
};

export default BookCard;
