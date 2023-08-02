import React, { useState } from "react";
import Form from "./components/Form";
import ListGroup from "./components/ListGroup";
import Navbar from "./components/Navbar";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({
    todo: {},
    isEdit: false,
  });

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const saveTodo = (text) => {
    const newTodo = {
      id: crypto.randomUUID(),
      text: text,
    };

    setTodos([newTodo, ...todos]);
  };

  // Edit Todo
  const editTodo = (todo) => {
    setEdit({
      todo: todo,
      isEdit: true,
    });
  };

  // Update Todo

  const updateTodo = (id, text) => {

    setTodos(
      todos.map((item) => (item.id === id ? { ...item, text: text } : item))
    );
    setEdit({ todo: {}, isEdit: false });
  };

  return (
    <>
      <div className="container p-5">
       <Navbar/>
        <Form saveTodo={saveTodo} edit={edit} updateTodo={updateTodo} />
        <ListGroup todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
    </>
  );
};

export default App;
