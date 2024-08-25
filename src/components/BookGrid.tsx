import React, { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import { Text } from "@chakra-ui/react";

interface Work {
  title: string;
  cover_id: number;
  author_names: string[];
  first_published_year: number;
}

interface ReadingLogEntry {
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
      <ul>
        {books.map((book, index) => (
          <li key={index}>
            <h2>{book.work.title}</h2>
            <img
              src={`https://covers.openlibrary.org/b/id/${book.work.cover_id}-M.jpg`}
              alt={book.work.title}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BookGrid;
