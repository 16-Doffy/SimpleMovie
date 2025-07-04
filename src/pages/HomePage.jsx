import React from "react";
import Banner from "../Components/Banner/Banner";
import MovieList from "../Components/MovieList";

export default function HomePage() {
  return (
    <>
      <Banner></Banner>
      <section className="movies-layout page-container pb-10 ">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Now playing
        </h2>
        <MovieList></MovieList>
      </section>

      <section className="movies-layout page-container pb-20 ">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Top rate
        </h2>
        <MovieList type="top_rated"></MovieList>
      </section>

      <section className="movies-layout page-container pb-10 ">
        <h2 className="capitalize text-white mb-10 text-3xl font-bold">
          Trending
        </h2>
        <MovieList type="popular"></MovieList>
      </section>
    </>
  );
}
