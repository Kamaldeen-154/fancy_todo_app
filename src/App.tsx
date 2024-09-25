import React, { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { text: "Coding", isCompleted: false },
    { text: "Reading", isCompleted: false},
    { text: "Party With Friends", isCompleted: false },
    { text: "Playing CODM", isCompleted: false },
  ]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, { text: newTodo, isCompleted: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Hello User</h1>
        <p>What are you going to do?</p>
        <div className="add-todo">
          <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add To-Do"
          />
          <button onClick={addTodo}>+</button>
        </div>
        <div className="todo-list">
          <p>Your To-Do List :</p>
          {todos.map((todo, index) => (
            <div className="todo-item" key={index}>
              <input
                type="checkbox"
                checked={todo.isCompleted}
                onChange={() => toggleTodo(index)}
              />
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "none",
                }}
              >
                {todo.text}
              </span>
              <button onClick={() => deleteTodo(index)}>🗑️</button>
            </div>
          ))}
        </div>
      </div>
      <footer>
        <div className="nav">
          <span>Home</span>
          <span>Posts</span>
          <span>Location</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
