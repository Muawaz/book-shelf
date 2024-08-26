import useData from "./useData";

export interface Work {
    title: string;
    key: string
    cover_id?: number;
    author_names?: string[];
    first_publish_year?: number;
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
 const {data, error, isLoading} = useData<FetchBookResponse>("/people/mekBot/books/want-to-read.json") 

 const books = data?.reading_log_entries ?? [];
 return {books, error, isLoading}
}

export default useBooks;