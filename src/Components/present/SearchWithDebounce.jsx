
import { useState, useEffect } from "react";
import useDebounce from "../../Hooks/useDebounce";
import { fetcher } from "../../config/config";


export default function SearchWithDebounce() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [apiCalls, setApiCalls] = useState(0);
  const debouncedQuery = useDebounce(query, 5000);

  console.log("🟢 Đặt timer 5s cho:", query, "| Debounced:", debouncedQuery);

  useEffect(() => {
    if (debouncedQuery) {
      setApiCalls(prev => prev + 1);
      console.log("🟢 Đủ 5s không gõ thêm | Gọi API với::", debouncedQuery, "Số lần gọi:", apiCalls + 1);
      fetcher(
        `https://api.themoviedb.org/3/search/movie?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${debouncedQuery}`
      ).then(data => {
        console.log("🟢kết quả tìm thấy:", debouncedQuery);
        setMovies(data.results);
      });
    }
  }, [debouncedQuery]);

  return (
    <div className="p-5 border border-green-500 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-green-500">
        Search CÓ dùng debounce
      </h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l"
          placeholder="Nhập từ khóa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="bg-green-500 text-white p-2 rounded-r">
          API Calls: {apiCalls}
        </span>
      </div>

      <div className="h-60 overflow-y-auto">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id} className="p-2 border-b">
              {movie.title}
            </div>
          ))
        ) : (
          <p className="text-gray-500">Không có kết quả</p>
        )}
      </div>
    </div>
  );
}
