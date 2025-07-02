"use client";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ item }) => {
  if (!item) return null; // Tránh lỗi nếu item không tồn tại

  const { title, vote_average, poster_path, id } = item;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;
  console.log("itedsadsam", item);
  return (
    <div className="movie-card   flex flex-col rounded-lg   text-white w-full h-full select-none hover:scale-95 transition-transform duration-300 hover:text-blue-500">
      <img
        src={imageUrl}
        alt={title}
        className="h-[320px] w-[320px] object-cover p-1 rounded-full border hover:scale-95 transition-transform duration-300"
      />

      <div className="flex flex-col text-center mt-2 relative">
        <p className="flex flex-col-2 justify-center gap-2 text-xl  ">
          <span>
            {vote_average.toFixed(1)}
            <span className="text-yellow-400 boder border-amber-300 absolute">&#9733;</span>
          </span>
        </p>
        <div className="  text-center text-white ">
          <button onClick={() => navigate(`/movies/${id}`)}>
            <p className="text-center bg-gradient-to-l from-red-500 to-white bg-clip-text text-transparent text-xl mt-2 cursor-pointer">
              {title}
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

MovieCard.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Thêm kiểm tra id
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
