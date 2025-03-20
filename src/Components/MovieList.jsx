import React, { useEffect, useState } from 'react';
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css"
import MovieCard from './Movie/MovieCard';
import useSWR from 'swr';
import { fetcher } from '../config/config';
//api_key=733d08f3b55d5c3b516692a4f30a1ff7
const MovieList = () => {
    const [movie, setMovie] = useState([]);
    const { data, error } = useSWR('https://api.themoviedb.org/3/movie/now_playing?api_key=733d08f3b55d5c3b516692a4f30a1ff7', fetcher)
    console.log("data",data)
     useEffect(() => {
        setMovie(data.results);
     },[data]);
     console.log("movie",movie)
    return (
        <div className="movie-list">
        <Swiper grabCursor={"true"} spaceBetween={40} slidesPerView={"auto"}>
        <SwiperSlide>
        <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
        <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
        <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
        <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
        <MovieCard />
        </SwiperSlide>
        <SwiperSlide>
        <MovieCard />
        </SwiperSlide>
        </Swiper>
         </div>
    );
};

export default MovieList;