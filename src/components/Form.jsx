import React, { useEffect, useState } from "react";

const Form = ({ saveTodo, edit, updateTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (edit.isEdit) {
      updateTodo(edit.todo.id, text);
    } else {
      saveTodo(text);
    }
    setText("");
  };

  useEffect(() => {
    setText(edit.todo.text);
  }, [edit]);

  return (
    <form className="my-5" onSubmit={handleSubmit}>
      <input
        value={text}
        type="text"
        required
        className="form-control rounded-0 my-2"
        placeholder="Enter Text Here"
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn btn-success rounded-0 w-100">
        Save
      </button>
    </form>
  );
};

export default Form;
