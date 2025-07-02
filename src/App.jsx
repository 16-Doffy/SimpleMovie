// import { Routes, Route } from "react-router-dom";
// import MovieList from "./Components/MovieList";
// import Banner from "./Components/Banner/Banner";
// import "swiper/css";
// import HomePage from "./pages/HomePage";
// import MoviesPage from "./pages/MoviesPage";
// import DetailMovie from "./pages/DetailMovie";
// import Main from "./Components/Layput/Main";

// function App() {
//   return (
//     <Routes>
//       <Route element={<Main />}>
//         <Route
//           path="/"
//           element={
//             <>
//               <Banner />
//               <HomePage />
//             </>
//           }
//         />
//         <Route path="/movies" element={<MoviesPage />} />
//         <Route path="/movies/:moviesId" element={<DetailMovie />} />
//       </Route>
//     </Routes>
//   );
// }

// export default App;
import React from "react";
import "swiper/scss";
import MovieList from "./Components/MovieList";
import Banner from "./Components/Banner/Banner";
import Header from "./Components/Layput/Header";
import { Route, Routes } from "react-router-dom";
import Main from "./Components/Layput/Main"
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import DetailMovie from "./pages/DetailMovie";
import BookingTicker from "./Components/BookingTicker/BookingTicker";
import DemoSearchPage from "./pages/DemoSearchPage";
import HomeComic from "./pageComic/Comic/Comic";


export default function App() {
  return (
    <>
    <Routes>
      <Route element={<Main></Main>}>  
      <Route path="/" element={<HomePage></HomePage>}></Route>
       <Route path="/movies" element={<MoviesPage></MoviesPage>}></Route>
        <Route path="/movies/:movieId" element={<DetailMovie></DetailMovie>}></Route>
         <Route path="/ticket" element={<BookingTicker></BookingTicker>}></Route>
         <Route path="/demo" element={<DemoSearchPage></DemoSearchPage>}></Route>
          <Route path="/HomeComic" element={<HomeComic></HomeComic>}></Route>
      </Route>
    </Routes>
    </>
  );
}
