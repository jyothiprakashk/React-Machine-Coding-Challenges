import { useMemo, useState } from "react";

function calculate() {
  let result = 0;
  for (let i = 0; i < 1000000000; i++) {
    result += i;
  }
  return result;
}

function UseMemo() {
  const [count, setCount] = useState(0);

  //   const value = calculate();
  const calculate = useMemo(() => {
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, []);
  console.log(calculate, "value");
  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default UseMemo;
