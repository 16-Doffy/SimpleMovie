import React from "react";
import MovieList from "../Components/MovieList";
import Banner from "../Components/Banner/Banner";

const HomePage = () => {
  return (
    <>
      <section className="movie-layout p-10">
        <h2 className="capitalize text-white mb-10 text-4xl font-bold">
          Now Playing
        </h2>
        <MovieList />
      </section>

      <section className="movie-layout p-10">
        <h2 className="capitalize text-white mb-10 text-4xl font-bold">
          Top Rated
        </h2>
        <MovieList type="top_rated" />
      </section>

      <section className="movie-layout p-10">
        <h2 className="capitalize text-white mb-10 text-4xl font-bold">
          Trending
        </h2>
        <MovieList type="popular" />
      </section>
    </>
  );
};

export default HomePage;
