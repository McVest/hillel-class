import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, toggleTodo,deleteTodo} from "../../reducer/actions";

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  
  const handleToggle = () => {
    dispatch(toggleTodo(index));
  };
  const deleteTodos = (e) => {
    e.stopPropagation();
    dispatch(deleteTodo(index));
  };
  
  return (
    <div style={{ cursor: 'pointer' }} onClick={handleToggle}>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <button onClick={deleteTodos}>delete todo</button>
    </div>
  );
};

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={`${todo.text}-${index}`} todo={todo} index={index} />
      ))}
    </div>
  );
};

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = React.useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(addTodo(inputValue));
      setInputValue('');
    }
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="Введіть справу" />
      <button type="submit">Додати</button>
    </form>
  );
};

const TodoApp = () => {
  return (
    <div>
      <h2>Список тудушок</h2>
      <TodoList />
      <h2>Додати тудушку</h2>
      <TodoForm />
    </div>
  );
};

export default TodoApp;
