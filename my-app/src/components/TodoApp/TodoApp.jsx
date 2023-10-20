import React, {useState} from 'react';

const TodoItem = ({todo, onClick}) => {
  return (
    <div style={{cursor: 'pointer'}} onClick={onClick}>
      <span style={{cursor: 'pointer', textDecoration: todo.completed ? 'line-through' : 'none'}}>{todo.text}</span>
    </div>
  );
};

const TodoList = () => {
  const [todos, setTodos] = useState([
    {text: 'Зробити покупки', completed: false},
    {text: 'Вивчити React', completed: true},
    {text: 'Приготувати обід', completed: false},
  ]);
  
  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };
  
  return (
    <div>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onClick={() => toggleTodo(index)}/>
      ))}
    </div>
  );
};

const TodoForm = ({addTodo}) => {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введіть справу"
      />
      <button type="submit">Додати</button>
    </form>
  );
};

const TodoApp = () => {
  const [todos, setTodos] = useState([
    {text: 'Зробити покупки', completed: false},
    {text: 'Вивчити React', completed: true},
    {text: 'Приготувати обід', completed: false},
  ]);
  
  const addTodo = (text) => {
    const newTodo = {text: text, completed: false};
    setTodos([...todos, newTodo]);
  };
  
  return (
    <div>
      <h2>Список задач</h2>
      <TodoList todos={todos}/>
      <h2>Додати задачу</h2>
      <TodoForm addTodo={addTodo}/>
    </div>
  );
};

export default TodoApp;
