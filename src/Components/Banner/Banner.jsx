import useSWR from "swr";
import { Swiper, SwiperSlide } from "swiper/react";
import { fetcher } from "../../config/config";
import "swiper/css";
import Button from "../Button/Button";
import { Navigate, useNavigate } from "react-router-dom";

const Banner = () => {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );
  const movies = data?.results || [];
console.log("movies",movies)
  return (
    <section className="banner w-full h-full  m-auto overflow-hidden">
      <Swiper grabCursor="true" slidesPerView={"auto"}>
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

const BannerItem = ({ item }) => {
  const navigate = useNavigate();
  const { title, backdrop_path,id } = item;
  return (
    <div className="w-[50%] h-[10%] m-auto rounded-lg relative object-cover   inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] ">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        className="w-full h-full object-cover rounded-lg"
        alt={title}
      />
      <div className="absolute left-5 bottom-5 " >
        <h2 className="font-bold text-white text-4xl mb-3">{title}</h2>
        <Button  onClick={() => navigate(`/movies/${id}`)}  ></Button>
      </div>
    </div>
  );
};

export default Banner;
