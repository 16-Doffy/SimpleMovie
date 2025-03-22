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
  const { title, backdrop_path ,genres, overview} = data;

  return (
    <div className="py-10">
      <div className="w-full h-[800px] relative mb-10">
        <div className="relative inset-0 bg-black bg-opacity-70"></div>
        <div
          className="w-full h-full bg-cover bg-no-repeat "
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${backdrop_path})`,
          }}
        ></div>
      </div>
      <div className="w-full h-[400px] max-w-[800px] mx-auto -mt-[200px] relative z-10 pb-10">
        <img
          src= {`https://image.tmdb.org/t/p/original${backdrop_path}`}
          alt=""
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <h1 className="text-center text-3xl font-bold  text-white mb-10">{title}</h1>
      {genres && genres.length > 0 && ( // thêm điều kiện để kiểm tra genres
        <div className="flex items-center gap-x-5 mb-10 justify-center">
          {genres.map((item) => (
            <span key={item.id} className="py-2 px-5 border border-pink-500 rounded-lg ">{item.name} </span>
          ))}
        </div>
      )}
      <p className="text-center text-3xl text-white leading-relaxed max-w-[600px] max-auto m-auto">{overview}</p>
    </div>
  );
};

export default DetailMovie;
