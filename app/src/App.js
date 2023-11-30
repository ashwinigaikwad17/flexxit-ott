import React  from 'react';
import { Route } from 'react-router-dom';
import {  BrowserRouter ,  Routes} from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import Flexxit from './pages/Flexxit';
import Player from "./pages/Player";
import Movies from './pages/Movies';
import TVShow from "./pages/TVShow";
import Watchlist from "./pages/Watchlist";
import About from './pages/About';
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route exact path="/" element={<Flexxit />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<Signup />} />
      <Route exact path="/player" element={<Player />} />
      <Route exact path="/movies" element={<Movies />} />
      <Route exact path="/tvshow" element={<TVShow />} />
      <Route exact path="/watchlist" element={<Watchlist />} />
      <Route exact path="/Aboutus" element={<About />} />
      
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
