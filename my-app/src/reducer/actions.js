export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    text,
  };
};

export const toggleTodo = (index) => {
  return {
    type: 'TOGGLE_TODO',
    index,
  };
};

export const deleteTodo = (index) => {
  return {
    type: 'DELETE_TODO',
    index,
  };
};