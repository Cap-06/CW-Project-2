import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app rounded-4">
            <SearchForm defaultCity="Sitapur" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
