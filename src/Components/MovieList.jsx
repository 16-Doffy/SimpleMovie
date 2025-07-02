import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import MovieCard from "./Movie/MovieCard";
import useSWR from "swr";
import { fetcher } from "../config/config";
//https://api.themoviedb.org/3/movie/now_playing?api_key=733d08f3b55d5c3b516692a4f30a1ff7
export default function MovieList({ type = "now_playing" }) {
  const { data } = useSWR(
    //(en-Us)
    `https://api.themoviedb.org/3/movie/${type}?api_key=733d08f3b55d5c3b516692a4f30a1ff7&language=vi`,
    fetcher
  );
  const movies = data?.results || [];

  console.log("data", data);
  return (
    <div className="movie-list">
      <Swiper grabCursor={"true"} spaceBetween={10} slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <MovieCard item={item}></MovieCard>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
