import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { SimpleGrid, Text } from "@chakra-ui/react";
import BookCard from "./BookCard";

export interface Work {
  title: string;
  cover_id: number;
  author_names: string[];
  first_published_year: number;
}

export interface ReadingLogEntry {
  work: Work;
}

interface FetchBookResponse {
  page: number;
  numFound: number;
  reading_log_entries: ReadingLogEntry[];
}

const BookGrid = () => {
  const [books, setBooks] = useState<ReadingLogEntry[]>([]);
  const [error, setError] = useState();

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<FetchBookResponse>(
        "https://openlibrary.org/people/mekBot/books/want-to-read.json",
        { signal: controller.signal }
      )
      .then((res) => {
        setBooks(res.data.reading_log_entries);
        console.log(res.data.reading_log_entries);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
      });

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={5}
        padding="20px"
      >
        {books.map((book, index) => (
          <BookCard key={index} book={book} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default BookGrid;
