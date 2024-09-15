import { useEffect, useState } from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import MoviesDetail from "./pages/MoviesDetail";
import MovieLists from "./pages/MovieLists";

function App() {
 
  const routes = (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieLists/>}/>
        <Route path="/movies/:id" element={<MoviesDetail/>}/>
      </Routes>
    </Router>
  )
  return (
    <>
      {routes}
    </>
  );
}

export default App;
