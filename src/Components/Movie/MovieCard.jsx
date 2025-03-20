import kata from "../../assets/img/kata.jpg"
const MovieCard = () => {
    return (
          <div className="movie-card rounded-lg p-3 bg-slate-800 text-white">
        <img src={kata} alt="" className="w-full h-[350px] object-cover rounded-lg"/>
        <h3 className="text-xl text-white font-bold mb-2 mt-1">Spiderman: Home Coming</h3>
        <div className="flex item-center justify-between text-md opacity-50 mb-10">
          <span>2017</span><span>7.5</span>
        </div>
        <button className="py-3 px-6 rounded-lg capitalize bg-pink-500 text-2xl w-full text-center p-20">
      Watch Now
        </button>
          </div>
    );
};

export default MovieCard;