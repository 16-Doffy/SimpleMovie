import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./Movie/MovieCard";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieRate from "./Movie/MovieRate";
//api_key=733d08f3b55d5c3b516692a4f30a1ff7
const MovieRated = () => {
  const [movieRate, setMovieRate] = useState([]);
  const { data } = useSWR(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=733d08f3b55d5c3b516692a4f30a1ff7",
    fetcher
  );
  console.log("data", data);

  useEffect(() => {
    if (data && data.results) setMovieRate(data.results);
  }, [data]);

  console.log("movie", movieRate);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movieRate.length > 0 &&
            movieRate.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieRate item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieRated;
