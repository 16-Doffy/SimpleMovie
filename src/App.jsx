import { NavLink, Route, Routes } from "react-router-dom";
import MovieList from "./Components/MovieList";
import Banner from "./Components/Banner/Banner";
import "swiper/css";
import Header from "./Components/Layput/Header";
import HomePage from "./pages/HomePage";
import Main from "./Components/Layput/Main";
import MoviesPage from "./pages/MoviesPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <HomePage></HomePage>
              </>
            }
          ></Route>
          
          <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
