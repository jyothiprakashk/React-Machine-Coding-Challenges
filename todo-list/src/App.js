import React, { useState } from "react";
import "./App.css";

const TODO_LIST_TYPE = ["All", "Active", "Completed"];

function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

function App() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [filteredTodoList, setFilteredTodoList] = useState([]);
  const [todoTab, setTodoTab] = useState("All");

  const onTodoSubmit = () => {
    setTodoList((prevTodoList) => {
      let list = [
        ...prevTodoList,
        { todo, completed: false, id: new Date().getTime() },
      ];
      setFilteredTodoList(list);
      return list;
    });
    setTodo("");
  };

  const onHandleTodoChecked = (index) => {
    let result = filteredTodoList.map((todo) =>
      todo.id === index ? { ...todo, completed: !todo.completed } : todo
    );
    setFilteredTodoList(result);
    setTodoList(result)
  };

  const onTodoFilterChange = (e) => {
    const type = e.target.innerHTML;
    setTodoTab(type);
    switch (type) {
      case "All":
        return setFilteredTodoList(todoList);
      case "Active":
        return setFilteredTodoList(todoList.filter((todo) => !todo.completed));
      case "Completed":
        return setFilteredTodoList(todoList.filter((todo) => todo.completed));
      default:
        return setFilteredTodoList(todoList);
    }
  };

  const onTodoInputChange = (e) => {
    setTodo(e);
  };

  return (
    <div className="App">
      <div className="inputTodo">
        <input
          onChange={(e) => onTodoInputChange(e.target.value)}
          value={todo}
          placeholder="Enter Todo"
        />
        <button onClick={onTodoSubmit}>Submit</button>
      </div>
      <div className="buttonGroups" onClick={onTodoFilterChange}>
        {TODO_LIST_TYPE.map((type) => {
          return <div className={todoTab === type ? "active" : ""}>{type}</div>;
        })}
      </div>
      {filteredTodoList.map((todo) => {
        return (
          <div className="todoListContainer">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => onHandleTodoChecked(todo.id)}
            />
            <div style={{textDecoration:todo.completed?"line-through":""}}>{todo.todo}</div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
