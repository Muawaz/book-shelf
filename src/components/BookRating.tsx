import { StarIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import { ReadingLogEntry } from "../hooks/useBooks";
import useRating from "../hooks/useRating";

interface Props {
  book: ReadingLogEntry;
}

const BookRating = ({ book }: Props) => {
  const { rating, error } = useRating(book);
  return (
    <Box display="flex" alignItems="center" justifyContent="flex-end" p={4}>
      <StarIcon mr={8} color="#FFD700" />
      {
        <Text fontSize="md" lineHeight="0.1">
          {rating ? rating.toFixed(2) : "N/A"}
        </Text>
      }
    </Box>
  );
};

export default BookRating;
