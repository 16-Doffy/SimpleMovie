import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./Movie/MovieCard";
import useSWR from "swr";
import { fetcher } from "../config/config";
//api_key=733d08f3b55d5c3b516692a4f30a1ff7
const MovieList = ({ type = "now_playing"}) => {
  const [movie, setMovie] = useState([]);
  const { data} = useSWR(
    `https://api.themoviedb.org/3/movie/${type}?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );
  console.log("data", data);

  useEffect(() => {
    if (data && data.results) setMovie(data.results);
  }, [data]);

  console.log("movie", movie);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movie.length > 0 &&
          movie.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieList;
