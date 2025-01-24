import "./App.css";
import { useState, useCallback, useMemo } from "react";
import React from "react";
import UseMemo from "./useMemo";
import SlowComponent from "./useCallback";

// https://www.freecodecamp.org/news/difference-between-usememo-and-usecallback-hooks/

function App() {
  const [value, setValue] = useState("");
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setValue("Jyothi");
  }, [value]);

  return (
    <div className="App">
      {/* UseCallback */}
      <SlowComponent handleClick={handleClick} />
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>

      {/* UseMemo */}

      {/* <UseMemo /> */}
    </div>
  );
}

export default App;
