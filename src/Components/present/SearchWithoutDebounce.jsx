
import { useState, useEffect } from "react";
import { fetcher } from "../../config/config";


export default function SearchWithoutDebounce() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [apiCalls, setApiCalls] = useState(0);

  useEffect(() => {
    if (query) {
      console.log(" Gọi API ngay lập tức với query:", query);
      const timer = setTimeout(() => {
        setApiCalls(prev => prev + 1);
        console.log("Thực tế gọi API với:", query, "Lần thứ:", apiCalls + 1);
        fetcher(
          `https://api.themoviedb.org/3/search/movie?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${query}`
        ).then(data => {
          console.log(" Nhận kết quả cho:", query);
          setMovies(data.results);
        });
      }, 300);
      
      return () => {
        console.log(" Cleanup cho query:", query);
        clearTimeout(timer);
      };
    }
  }, [query]);

  console.log("🔴 Re-render với query:", query);

  return (
    <div className="p-5 border border-red-500 rounded-lg">
      <h2 className="text-xl font-bold mb-4 text-red-500">
        Search KHÔNG dùng debounce
      </h2>
      <div className="flex mb-4">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-300 rounded-l"
          placeholder="Nhập từ khóa..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <span className="bg-red-500 text-white p-2 rounded-r">
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