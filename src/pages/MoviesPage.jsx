import React from "react";
import MovieList from "../Components/MovieList";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieCard from "../Components/Movie/MovieCard";
//https://api.themoviedb.org/3/movie/latest
const MoviesPage = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );
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
          ></input>
        </div>
        <button>
        <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"  // ✅ Đúng cú pháp
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
      <div className="grid grid-cols-4 m-4 gap-10 ">
        {movies.length > 10 &&
          movies.map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
      </div>
    </div>
  );
};

export default MoviesPage;
