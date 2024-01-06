import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./pages/home/Home";
import MovieList from "./Components/Movie-List/MovieList";
import Movie from "./pages/home/MovieDetail/Movie";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home/>}></Route>
          <Route path="movie/:id" element={<Movie/>}></Route>
          <Route path="movies/:type" element={<MovieList/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
