import React, { useEffect, useState } from "react";
import MovieList from "../Components/MovieList";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieCard from "../Components/Movie/MovieCard";
import useDebounce from "../Hooks/useDebounce";
//https://api.themoviedb.org/3/movie/latest
//https://api.themoviedb.org/3/search/movie
const MoviesPage = () => {
  const [filter, setFilter] = useState("");

  const [url, setUrl] = useState(
    "https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7"
  );
  const fillterDebounce = useDebounce(filter || "", 500);

  const HandleFillterChange = (e) => {
    setFilter(e.target.value);
  };


  const { data } = useSWR(url, fetcher);
  const loading = !data;
  useEffect(() => {
    if (fillterDebounce) {
      setUrl(
        `https://api.themoviedb.org/3/search/movie?api_key=733d08f3b55d5c3b516692a4f30a1ff7&query=${fillterDebounce}`
      );
    } else {
      setUrl(
        "https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7"
      );
    }
 
  }, [fillterDebounce]);
  const movies = data?.results || [];
  console.log("moviespage", movies);
  return (
    <div className="py-10">
      <div className="flex w-72 border  rounded-full overflow-hidden text-2xl ml-5 p-3 bg-blue-900">
        <div className="flex-1">
          <input
            type="text"
            className="w-full text-white  outline-none"
            placeholder="Type here to search..."
            onChange={HandleFillterChange}
          ></input>
        </div>
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5" // ✅ Đúng cú pháp
            stroke="currentColor"
            className="size-9"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
      {loading && (
        <div className="w-10 h-10 rounded-full border-4 border-pink-500 border-t-transparent border-t-4 max-auto animate-spin"></div>
        )}
      <div className="grid grid-cols-4 m-4 gap-10 ">
        {!loading && movies.length > 10 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
      <div className="flex item-center justify-center mt-10 gap-x-5">
        <span className="w-20 cursor-pointer "><img src="https://cdn-icons-png.flaticon.com/128/2985/2985161.png" alt=""/></span>
        <span className="cursor-pointer inline-block text-6xl rounded-xl bg-blue-800 text-slate-200 leading-none px-4  p-2">1</span>
        
        <span className="w-20 cursor-pointer "><img src="https://cdn-icons-png.flaticon.com/128/2985/2985179.png" alt=""/></span>
      </div>
    </div>
  );
};

export default MoviesPage;
