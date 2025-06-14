import MovieCard from "./Components/MovieCard";
import Home from "./Pages/Home";
import { Routes, Route } from "react-router-dom";
import Favourite from "./Pages/Favourite";
import "./css/App.css";
import NavBar from "./Components/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Favourite" element={<Favourite />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
