//import { createStore } from 'redux';
import { useReducer, useState } from 'react';

/* const store = createStore((state = { name: 'javier' }, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, name: action.payload };
    default:
      return state;
  }
});

console.log(store.getState());
console.log(store.dispatch({ type: 'update', payload: 'hola' }));
console.log(store.getState());
 */

const initState = {
  name: 'javier',
  year: 29,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_YEAR':
      return parseInt(action.payload)
        ? { ...state, year: action.payload }
        : state;
    case 'UPDATE_NAME':
      return parseInt(action.payload)
        ? state
        : { ...state, name: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [input, setInput] = useState('');
  const [state, dispatch] = useReducer(reducer, initState);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  return (
    <div>
      <h1>Identifier Card</h1>
      <h2>
        <span>Name:</span>
        {state.name}
      </h2>
      <h2>
        <span>Year:</span>
        {state.year}
      </h2>
      <input type='text' name='input' onChange={handleChange} />
      <div>
        <button
          type='button'
          onClick={() => dispatch({ type: 'UPDATE_NAME', payload: input })}
        >
          Change Name
        </button>
        <button
          type='button'
          onClick={() => dispatch({ type: 'UPDATE_YEAR', payload: input })}
        >
          {' '}
          Year
        </button>
      </div>
    </div>
  );
};

export default App;
