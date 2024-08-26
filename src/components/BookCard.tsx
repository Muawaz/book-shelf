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
        <HStack justifyContent="space-between">
          <Heading fontSize="xs">Rating :</Heading>
          <BookRating book={book} />
        </HStack>
        <Divider borderWidth="2px" borderColor="aqua" />
        <HStack alignItems="right" justifyContent=" space-between">
          <Heading fontSize="xs">Authored By :</Heading>
          <Text>
            {book.work.author_names && book.work.author_names.join(" , ")}
          </Text>
        </HStack>
        <HStack marginY={1} justifyContent="space-between">
          <Heading fontSize="xs">Published Year :</Heading>
          <Text>{book.work.first_publish_year}</Text>
        </HStack>
      </CardBody>
    </Card>
  );
};

export default BookCard;
