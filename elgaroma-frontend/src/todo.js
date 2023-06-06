import React, { useState } from 'react';
import { connect } from 'react-redux';
import './TodoList.css'

const TodoList = ({ todos, addTodo, toggleComplete, deleteAllTodos }) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      addTodo(inputValue);
      setInputValue('');
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleAddTodo}>Add Todo</button>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{ textDecoration: todo.complete ? 'line-through' : 'none' }}
            onClick={() => toggleComplete(index)}
          >
            {todo.text}
          </li>
        ))}
      </ul>

      {todos.length > 0 && (
        <button onClick={deleteAllTodos}>Delete All</button>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => dispatch({ type: 'ADD_TODO', payload: text }),
    toggleComplete: (index) => dispatch({ type: 'TOGGLE_COMPLETE', payload: index }),
    deleteAllTodos: () => dispatch({ type: 'DELETE_ALL' }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
