import "./App.css";
import { MultiSelect } from "./multiselect";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [searchWord, setSearchWord] = useState("");

  useEffect(() => {
    if (searchWord.trim() !== "") {
      fetch(`https://dummyjson.com/users/search?q=${searchWord}`)
        .then((res) => res.json())
        .then((response) => {
          setUsers(response.users);
        });
    }
  }, [searchWord]);

  return (
    <MultiSelect
      users={users}
      setSearchWord={setSearchWord}
      searchWord={searchWord}
      setUsers={setUsers}
    />
  );
}

export default App;
