import "./App.css";
import { useState, useCallback, useMemo } from "react";
import React from "react";

const TestComponent = React.memo((props) => {
  console.log(props, "chikld");
  return <div></div>;
});


function App() {
  const [sortElements] = useState('');
  const [count, setCount] = useState(0);

  const SortFunction=useCallback(()=>{
    console.log(sortElements,"sorted")
  },[])




  return (
    <div className="App">
      <TestComponent SortFunction={SortFunction}/>
      <button onClick={() => setCount((prev) => prev + 1)}>{count}</button>
    </div>
  );
}

export default App;
