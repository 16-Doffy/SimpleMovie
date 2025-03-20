import PropTypes from "prop-types";

const MovieRate = ({ item }) => {
  console.log("MovieCard props:", item);

  if (!item) return null; // Tránh lỗi nếu item không tồn tại

  const { title, vote_average, release_date, poster_path } = item;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <div className="movie-card flex flex-col rounded-lg p-3 bg-slate-800 text-white h-full select-none">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-[650px] object-cover rounded-lg mb-5"
      />

      <div className="flex flex-col flex-1">
        <h3 className="text-3xl text-white font-bold mb-2 mt-1">{title}</h3>
        <div className="flex items-center justify-between text-md  mb-10 text-2xl">
          <span>
            {release_date ? new Date(release_date).getFullYear() : "N/A"}
          </span>
          <span>{vote_average} <span className="text-yellow-400 text-2xl">&#9733;</span></span>
        </div>
      </div>

      <button className="cursor-pointer py-3 px-6 rounded-lg capitalize bg-pink-500 text-2xl w-full text-center mt-auto">
        Watch Now
      </button>
    </div>
  );
};

MovieRate.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
    release_date: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieRate;
