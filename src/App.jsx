import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from "./pages/Home";
import MoviesDetail from "./pages/MoviesDetail";
import MovieLists from "./pages/MovieLists";
import TvSeries from "./pages/TvSeries";
import TvSeriesDetail from "./pages/TvSeriesDetail";
import About from "./pages/About";

function App() {
 
  const routes = (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/movies" element={<MovieLists/>}/>
        <Route path="/movies/:id" element={<MoviesDetail/>}/>
        <Route path="/tv-series" element={<TvSeries/>}/>
        <Route path="/tv-series/:id" element={<TvSeriesDetail/>}/>
        <Route path="/about" element={<About/>}/>
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
