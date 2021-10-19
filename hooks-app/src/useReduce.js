import { useReducer, useState } from 'react';

/*
 * CONCEPTO
 * definir una estructura de
 * datos q contiene el estado de nuestra app
 *  const state = {contador:0}
 *  action = {type: 'tipo', payload : any}
 */

const inicial = { contador: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'incrementar':
      return { contador: state.contador + 1 };
    case 'reducir':
      return { contador: state.contador - 1 };
    case 'set':
      return { contador: action.payload };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, inicial);

  const [value, setValue] = useState(0);

  const handlerSetValue = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <input type='number' name='value' onChange={handlerSetValue} />
      contador: {state.contador}
      <button onClick={() => dispatch({ type: 'incrementar' })}>
        aumentar
      </button>
      <button onClick={() => dispatch({ type: 'reducir' })}>reducir</button>
      <button onClick={() => dispatch({ type: 'set', payload: value })}>
        set
      </button>
    </div>
  );
};

export default App;
