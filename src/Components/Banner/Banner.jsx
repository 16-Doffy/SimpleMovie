import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import { pageContainer } from "../../styles/theme";
import useSWR from "swr";
import { fetcher } from "../../config/config";
import { Navigate, useNavigate } from "react-router-dom";
export default function Banner() {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/upcoming?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );
  const movies = data?.results || [];
  // useEffect(() => {
  //  if(data && data.results) setMovies(data.results); //check dieukien data
  // }, [data]);

  return (
    <section
      className="banner w-full h-[650px] bg-white mb-20 rounded-lg "
      style={{ ...pageContainer }}
    >
      <Swiper grabCursor="true" slidesPerView="auto" className="h-full">
        {movies.length > 0 &&
          movies.map((item) => (
            <SwiperSlide key={item.id}>
              <BannerItem item={item}> </BannerItem>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}

function BannerItem({ item }) {
  const { title, poster_path, original_title, vote_average, release_date, id } =
    item;
  const imageUrl = `https://image.tmdb.org/t/p/original${poster_path}`;
  const Navigate = useNavigate();
  return (
    <div className="w-full h-full rounded-lg relative">
      <div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(124,98,98,0.5)] to-[rgba(74,149,235,0.62)] rounded-lg"></div>
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-full object-cover rounded-lg object-top"
      />
      <div className="absolute left-5 bottom-5 w-full text-white">
        <h2 className="font-bold text-3xl mb-3">{title}</h2>
        <div className="flex items-center gap-x-3 mb-8">
          <span className="p-2 border border-white rounded-md">
            {original_title}
          </span>
          <span className="p-2 border border-white rounded-md">
            {release_date}
          </span>
          <span className="p-2 border border-white rounded-md">
            {vote_average} MDB
          </span>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => Navigate(`/movies/${id}`)}
            className="bg-pink-500 border border-amber-200 rounded-sm font-sans flex justify-center  items-center  py-3 px-6"
          >
            Watch Now
          </button>
          {/* <button
            onClick={() => Navigate(`/ticket`)}
            className="bg-blue-400 border border-amber-200 rounded-sm font-sans flex justify-center  items-center  py-3 px-6"
          >
            Booking Ticket
          </button> */}
        </div>
      </div>
    </div>
  );
}
