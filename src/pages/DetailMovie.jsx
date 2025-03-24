import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";
import { SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import MovieCard from "../Components/Movie/MovieCard";

const DetailMovie = () => {
  const { moviesId } = useParams(); // Lấy moviesId từ useParams()
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${moviesId}?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );

  console.log("data", data);
  if (!data) return null;
  const { title, backdrop_path, genres, overview } = data;

  return (
    <div className="py-10">
      <div className="w-full h-[800px] relative mb-10">
        <div className="relative inset-0 bg-black bg-opacity-100"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat border-4 border-black  "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg
           border-2 bg-indigo-300  bg-clip-padding p-1
          "
        />
      </div>
      <h1 className="text-center text-3xl font-bold  text-white mb-10">
        {title}
      </h1>
      {genres &&
        genres.length > 0 && ( // thêm điều kiện để kiểm tra genres
          <div className="flex items-center gap-x-5 mb-10 justify-center">
            {genres.map((item) => (
              <span
                key={item.id}
                className="py-2 px-5 border border-pink-500 rounded-lg "
              >
                {item.name}{" "}
              </span>
            ))}
          </div>
        )}
      <p
        className="text-center 
      text-3xl  leading-relaxed max-w-[600px] 
      max-auto m-auto
      bg-gradient-to-r from-pink-400 to-violet-300 bg-clip-text   text-transparent  
      mx-auto mb-10
      "
      >
        {overview}
      </p>
      <div className="w-20 flex m-auto text-center border text-white"></div>
      <MovieCredit></MovieCredit>
      <div className="w-20 flex m-auto text-center border text-white mt-10"></div>
      <MovieVideos></MovieVideos>
      <div className="w-20 flex m-auto text-center border text-white mt-10"></div>
      <MovieSilimar></MovieSilimar>
    </div>
  );
};
function MovieCredit() {
  //https://api.themoviedb.org/3/movie/{movie_id}/credits
  const { moviesId } = useParams(); // Lấy moviesId từ useParams()
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${moviesId}/credits?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );

  console.log("data credit", data);
  if (!data) return null;
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div className="py-10 ">
      <h2 className="text-center text-3xl mb-10 font-bold">Casts Main:</h2>
      <div className="grid grid-cols-4 gap-5">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-Item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
              className="w-full h-full object-cover rounded-lg mb-3"
            />
            <h3 className="text-center text-4xl">{item.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
function MovieVideos() {
  // https://api.themoviedb.org/3/movie/{movie_id}/videos

  const { moviesId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${moviesId}/videos?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );

  console.log("video", data);

  if (!data || !data.results || data.results.length === 0)
    return <p>Không có video nào</p>;

  return (
    <div className="py-10">
      <div className="flex flex-col gap-10">
        {data.results.slice(0,1).map((item) => (
          <div key={item.id}>
            <h3 className="text-3xl text-white mb-2  bg-blue-800 font-bold w-100 h-15 p-3 text-center">
              {item.name}
            </h3>
            <div className="w-full aspect-video">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${item.key}`}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full object-fill"
              ></iframe>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
// https://api.themoviedb.org/3/movie/{movie_id}/similar

function MovieSilimar () {
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/popular?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );
  const movies = data?.results || [];
  console.log("moviespage", movies);
  return (
    <div className="py-10">
   <h3 className="text-3xl text-white mb-2  bg-blue-800 font-bold w-100 h-15 p-3 text-center ">Similar Movie</h3>
      <div className="flex  flex-row gap-10 m-auto">
        {movies.length > 10 &&
          movies.slice(0,4).map((item) => (
            <MovieCard key={item.id} item={item}></MovieCard>
          ))}
          <h1><img src="https://cdn-icons-png.flaticon.com/256/10310/10310074.png" alt=""
            className="py-50 px-24"
          /> <p className="text-6xl border-2 w-full h-35 text-center p-1 bg-blue-700 rounded-2xl">
          Back To HomePage
          </p></h1>
          
      </div>
    </div>
  );
};
export default DetailMovie;
