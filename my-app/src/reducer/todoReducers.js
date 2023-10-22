export const COMMANDS={
  ADD_TODO:'ADD_TODO',
  TOGGLE_TODO:'TOGGLE_TODO',
  DELETE_TODO:'DELETE_TODO',
  EDIT_TODO:'EDIT_TODO',
}

const initialState = {
  todos: [
    { text: 'Зробити покупки', completed: false },
    { text: 'Вивчити React', completed: true },
    { text: 'Приготувати обід', completed: false },
  ],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case COMMANDS.ADD_TODO:
      return {
        todos: [...state.todos, { text: action.text, completed: false }],
      };
    case COMMANDS.TOGGLE_TODO:
      const newTodos = [...state.todos];
      newTodos[action.index].completed = !newTodos[action.index].completed;
      return {
        todos: newTodos,
      };
    case COMMANDS.DELETE_TODO:
      console.log(state.todos);
      const updatedTodos = state.todos.filter((todo, index) => index !== action.index);
      console.log(updatedTodos);
      return {
        todos: updatedTodos,
      };
    case COMMANDS.EDIT_TODO:
      const editedTodos = [...state.todos];
      if (!editedTodos[action.index].completed) {
        editedTodos[action.index].text = action.newText;
        editedTodos[action.index].completed = false;
      }
      return {
        todos: editedTodos,
      };
    default:
      return state;
  }
};
export default todoReducer;