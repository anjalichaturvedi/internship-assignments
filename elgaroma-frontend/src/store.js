import { createStore } from 'redux';

// Initial state
const initialState = {
  todos: [],
};

// Reducer function
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, { text: action.payload, complete: false }],
      };
    case 'TOGGLE_COMPLETE':
      return {
        ...state,
        todos: state.todos.map((todo, index) => {
          if (index === action.payload) {
            return {
              ...todo,
              complete: !todo.complete,
            };
          }
          return todo;
        }),
      };
    case 'DELETE_ALL':
      return {
        ...state,
        todos: [],
      };
    default:
      return state;
  }
};

// Create store
const store = createStore(reducer);

export default store;
