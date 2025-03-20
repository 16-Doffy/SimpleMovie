import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MovieCard from "./Movie/MovieCard";
import useSWR from "swr";
import { fetcher } from "../config/config";
import MovieTrending from "./Movie/MovieTrending";
//api_key=733d08f3b55d5c3b516692a4f30a1ff7
const MovieTrend = () => {
  const [movieTrend, setMovieTrend] = useState([]);
  const { data} = useSWR(
    "https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7",
    fetcher
  );
  console.log("data", data);

  useEffect(() => {
    if (data && data.results) setMovieTrend(data.results);
  }, [data]);

  console.log("movie", movieTrend);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        {movieTrend.length > 0 &&
            movieTrend.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieTrending item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default MovieTrend;
