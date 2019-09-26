import React from "react";
import "./App.css";
import nasaComponent from "./index.js";

function App() {
  return (
    <div className="App">
      <h1>Nasa Photos</h1>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <nasaComponent />
    </div>
  );
}

export default App;
