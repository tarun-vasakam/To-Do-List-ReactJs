import React, { useReducer, useState } from 'react';
import './styles.css'

const initialState = [];
function todoReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.payload];
    case 'REMOVE':
      return state.filter((_, index)=> index !== action.payload);
    default:
      throw new Error('Unknown action type');
  }
}
function TodoApp() {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    if (inputValue.trim()) {
      dispatch({ type: 'ADD', payload: inputValue });
      setInputValue('');
    }
  };
  const handleRemove = (index) => {
    dispatch({ type: 'REMOVE', payload: index });
  };
  return (
    <div className="container">
      <div className="title-container">To-Do List</div>
      <div className="input-container">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)} size="40"/>
        <button className="add-btn" onClick={handleAdd}>
          Add
        </button>
      </div>
      <ul className="list-container">
        {state.map((task, index) => (
          <li key={index} className="li-container">
            {task}
            <button className="remove-btn" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default TodoApp;

 