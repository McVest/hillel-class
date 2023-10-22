import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {addTodo, toggleTodo, deleteTodo, editTodo} from "../../reducer/actions";

const EditTodoModal = ({ index, initialText, closeModal }) => {
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState(initialText);
  
  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };
  
  const handleSave = () => {
    dispatch(editTodo(index, editedText));
    closeModal();
  };
  
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white' }}>
      <h2>Edit Todo</h2>
      <input type="text" value={editedText} onChange={handleTextChange} />
      <button onClick={handleSave}>Save</button>
      <button onClick={closeModal}>Cancel</button>
    </div>
  );
};
const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleToggle = () => {
    dispatch(toggleTodo(index));
  };
  
  const handleDelete = () => {
    dispatch(deleteTodo(index));
  };
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div style={{ marginBottom: '10px', display: 'flex', alignItems: 'center' }}>
      <div style={{ cursor: 'pointer', flex: 1 }} onClick={handleToggle}>
        <span style={{textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
      </div>
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
      <button onClick={openModal} style={{ marginLeft: '10px' }}>Edit</button>
      {isModalOpen && <EditTodoModal index={index} initialText={todo.text} closeModal={closeModal} />}
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
  const [inputValue, setInputValue] = useState('');
  
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
