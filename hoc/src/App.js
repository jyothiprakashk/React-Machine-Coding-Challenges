import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import HOCLoggerAndLoading from "./HOC";
import ListItems from "./ListItems";

function App() {
  const [isLoading, setLoading] = useState(false);
  const [users, setUsers] = useState([
    { name: "Jyothi", id: "J" },
    { name: "Bhanu", id: "B" },
    { name: "Naresh", id: "N" },
  ]);

  const HocComponent = HOCLoggerAndLoading(ListItems);

  return (
    <div className="App">
      <HocComponent users={users} setUsers={setUsers} isLoading={isLoading} />
    </div>
  );
}

export default App;
