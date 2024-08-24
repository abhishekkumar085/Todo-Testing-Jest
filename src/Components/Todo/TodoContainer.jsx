import React, { useState } from 'react';
import Todo from './Todo';

const TodoContainer = () => {
  const [todo, setTodo] = useState('');
  const [saveTodo, setSaveTodo] = useState([{ id: new Date(), name: 'xyz' }]);
  const [edit, setEdit] = useState(null);

  const handleSaveTodo = (e) => {
    if (todo === '') {
      return;
    }
    e.preventDefault();
    if (edit) {
      setSaveTodo((prev) =>
        prev.map((item) => (item.id === edit ? { ...item, name: todo } : item))
      );
      setEdit(null);
    } else {
      const newTodo = { id: Date.now(), name: todo };
      setSaveTodo((prev) => [...prev, newTodo]);
      setTodo('');
    }
  };
  const handleEdit = (id, name) => {
    setTodo(name);
    setEdit(id);
  };
  const handleDelete = (id) => {
    setSaveTodo((prev) => prev.filter((item) => item.id !== id));
  };
  return (
    <Todo
      todo={todo}
      setTodo={setTodo}
      handleSaveTodo={handleSaveTodo}
      saveTodo={saveTodo}
      handleDelete={handleDelete}
      handleEdit={handleEdit}
    />
  );
};

export default TodoContainer;
