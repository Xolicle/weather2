import React from "react";
import "./App.css";
import Weather from "./Weather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h2 className="heading">
          <FontAwesomeIcon icon={faCloud} className="icon" />
          Weather App
        </h2>

        <Weather defaultCity="Johannesburg" />

        <footer>
          <p>
            This project was coded by{" "}
            <a href="https://glittering-palmier-59d79c.netlify.app/">
              Xolisile Ndlovu
            </a>{" "}
            ,is open-sourced on{" "}
            <a href="https://github.com/Xolicle/weather2"> Github </a>
            and hosted on{" "}
            <a href="https://profound-dolphin-3cb396.netlify.app/"> Netlify</a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
