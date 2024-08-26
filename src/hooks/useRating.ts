import { ReadingLogEntry } from "./useBooks";
import useData from "./useData";

interface FetchRatingResponse {
  summary: {
    average: number;
  };
}

const useRating = (book: ReadingLogEntry ) => 
  {
    const endpoint = book.work.key + "/ratings.json"
    const {data, error, isLoading} = useData<FetchRatingResponse>(endpoint)

    const rating = data?.summary.average ?? 0
    return {rating, error, isLoading}
  }
  
//   {
//     const [rating, setRating] = useState(0);
//     const [error, setError] = useState();
  
//     useEffect(() => {
//       const controller = new AbortController();
//       const endpoint = book.work.key;
//       apiClient
//         .get<FetchRatingResponse>(book.work.key + "/ratings.json", {
//           signal: controller.signal,
//         })
//         .then((res) => {
//           setRating(res.data.summary.average);
//           console.log(typeof res.data.summary.average);
//         })
//         .catch((err) => {
//           if (err instanceof CanceledError) return;
//           setError(err.message);
//         });
  
//       return () => controller.abort();
//     }, []);

//     return {rating, error}

// }

export default useRating;