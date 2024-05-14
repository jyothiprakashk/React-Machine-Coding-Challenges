import React from "react";
import "./App.css";
import { StarRating } from "./starrating";

function App() {
  return (
    <div className="App">
      <StarRating value={2} total={5} />
    </div>
  );
}

export default App;


