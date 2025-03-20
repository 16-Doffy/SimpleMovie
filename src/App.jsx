import { NavLink } from "react-router-dom";
import kata from "./assets/img/kata.jpg"
function App() {
  return <>
  <header className="header flex items-center justify-center gap-x-5 text-white py-10 mb-10">
  <span className="text-pink-400">Home</span>
  <span>Movies</span>
  </header>
  <section className="banner w-[50%] h-[50%] m-auto ">
<div className="w-full h-full rounded-lg relative ">
<div className="overlay absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-[rgba(0,0,0,0.5)] rounded-lg"></div>
<img src={kata} className="w-full h-full object-fill  rounded-lg"/>
<div className="absolute left-5 bottom-0 w-full">
<h2 className="font-bold text-white text-6xl mb-5">Kata My Life</h2>
<div className="flex items-center gap-x-3 mb-8 text-white">
<span className="p-4 py-2 border border-white rounded-md">Action</span>
<span className="p-4 py-2 border border-white rounded-md">Action</span>
<span className="p-4 py-2 border border-white rounded-md">Action</span>

</div>
<button className="py-3 px-6 rounded-lg bg-pink-500 text-white font-medium">Watch Now</button>
</div>
</div>
  </section>
  <section className="movie-layout p-10 ">
    <h2 className="capitalize text-white mb-10 text-4xl font-bold ">Now Playing</h2>
  <div className="movie-list grid grid-cols-4 gap-10">
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
  </div>
  
  </section>

  <section className="movie-layout p-10 ">
    <h2 className="capitalize text-white mb-10 text-4xl font-bold ">Top Rated</h2>
  <div className="movie-list grid grid-cols-4 gap-10">
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
  </div>
  
  </section>

  <section className="movie-layout p-10 ">
    <h2 className="capitalize text-white mb-10 text-4xl font-bold ">Treding</h2>
  <div className="movie-list grid grid-cols-4 gap-10">
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
  </div>
  
  </section>
  </>;
}

export default App;
