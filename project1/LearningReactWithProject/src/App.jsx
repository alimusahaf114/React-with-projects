import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Favourite from "./Pages/Favourite";
import "./css/App.css";
import NavBar from "./Components/NavBar";
import { MovieProvider } from "./Context/MovieContext";
function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favourite" element={<Favourite />}></Route>
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
