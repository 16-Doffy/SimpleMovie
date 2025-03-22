import { Routes, Route } from "react-router-dom";
import MovieList from "./Components/MovieList";
import Banner from "./Components/Banner/Banner";
import "swiper/css";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import DetailMovie from "./pages/DetailMovie";
import Main from "./Components/Layput/Main";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route
          path="/"
          element={
            <>
              <Banner />
              <HomePage />
            </>
          }
        />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:moviesId" element={<DetailMovie />} />
      </Route>
    </Routes>
  );
}

export default App;
