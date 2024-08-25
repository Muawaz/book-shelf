import { useEffect, useState } from "react";
import axios, { CanceledError } from "axios";
import apiClient from "../services/api-client";

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

const useBooks = () => {

    
  const [books, setBooks] = useState<ReadingLogEntry[]>([]);
  const [error, setError] = useState();
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchBookResponse>(
        "/people/mekBot/books/want-to-read.json",
        { signal: controller.signal }
      )
      .then((res) => {
        setBooks(res.data.reading_log_entries);
        console.log(res.data.reading_log_entries);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, []);

  return {books, error, isLoading}

}

export default useBooks;