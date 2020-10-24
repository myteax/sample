import React from "react";
import "./App.css";
import Cards from "./Components/Pages/Cards";
import Jumbo from "./Components/Pages/Jumbo";
import Navbar from "./Components/Pages/Navbar";
import Slider from "./Components/Pages/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="slid">
        <Slider />
      </div>
      <div className="cc">
        <Jumbo />
      </div>

      <div className="cards3">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
    </div>
  );
}

export default App;
