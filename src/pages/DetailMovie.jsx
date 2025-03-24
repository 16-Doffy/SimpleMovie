import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";

const DetailMovie = () => {
  const { moviesId } = useParams(); // Lấy moviesId từ useParams()
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${moviesId}?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );

  console.log("data", data);
  if (!data) return null;
  const { title, backdrop_path, genres, overview, character } = data;

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
      <MovieCredit></MovieCredit>
      <MovieVideos></MovieVideos>
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
              className="w-full h-[350px] object-cover rounded-lg mb-3"
            />
            <h3 className="text-center text-2xl">{item.name}</h3>
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

  return <div></div>;
}
export default DetailMovie;
