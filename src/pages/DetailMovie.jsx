import { useParams } from "react-router-dom";
import useSWR from "swr";
import { fetcher } from "../config/config";
export default function DetailMovie() {
  const { movieId } = useParams();

  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );

  if (!data) return null;

  const { title, genres, overview,  poster_path } = data;

  return (
    <div className="text-white ">
      <div className="w-auto relative flex flex-col items-center">
        <div className="grid grid-cols-3 ">
          <div className="w-[450px] shadow-lg rounded overflow-hidden h-auto">
            <img
              src={`https://image.tmdb.org/t/p/original${poster_path}`}
              alt={title}
              className="w-full h-auto object-cover rounded p-1 bg-blue-600"
            />
          </div>

          <div className="flex flex-col-3">
            <div className="text-2xl flex flex-col mt-2 mr-30">
              {title}
              <p className="grid grid-rows-2 ">
                {genres.length > 0 && (
                  <div className="">
                    {genres.map((item) => (
                      <span
                        key={item.id}
                        className="rounded-full w-15 text-center gap-2 text-xl  font-medium  border-r-2 border-pink-500"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                )}
              </p>
              <p className="text-transparent bg-gradient-to-t from-pink-400 to-white bg-clip-text">
                {overview}
              </p>
            <MovieCredit></MovieCredit>
            </div>
          </div>
        </div>

        <MovieView></MovieView>
      </div>
    </div>
  );
}
//https://api.themoviedb.org/3/credit/{credit_id}
function MovieCredit() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
  );
  if (!data) return null;
  console.log(data);
  const { cast } = data;
  if (!cast || cast.length <= 0) return null;
  return (
    <div>
      <h2 className="text-center text-2xl pt-12"> Casts </h2>
      <div className="grid grid-cols-4 gap-5 m-2 w-[768px] h-[400px]  ">
        {cast.slice(0, 4).map((item) => (
          <div className="cast-item mt-5 " key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${item.profile_path}`}
              alt=""
              className="w-40 h-40 rounded-full p-2"
            />
            <h3 className="text-xl text-center">{item.name}</h3>
          </div>
        ))}
        
      </div>
    </div>
  );
}
function MovieView() {
  const { movieId } = useParams();
  const { data } = useSWR(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
    fetcher
    // `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=733d08f3b55d5c3b516692a4f30a1ff7`,
  );
  if (!data) return null;
  const { results } = data;
  if (!results || results.length <= 0) return null;
  return (
    <div className="py-10">
      <div className="flex flex-col">
        {results.slice(0, 1).map((item) => (
          <div key={item.id} className="w-full aspect-video">
            <h3 className="mb-5 text-xl font-medium text-pink-400 text-center">
              {item.name}
            </h3>
            <iframe
              width="1600"
              height="721"
              src={`https://www.youtube.com/embed/${item.key}`}
              title="Tùng Lâm bình luận Play-off LPL| FPX vs IG (Bo5) | Round 1 nhánh thua #lpltiengviet #lpl"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
