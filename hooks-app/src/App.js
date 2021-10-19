import { useState, useEffect, useReducer, useRef } from 'react';

const initValues = {
  counter: 0,
  todo: ['Ver al nico', 'llamar al proveedor', 'reunion a las 6pm'],
};

const actions = {
  aumentar: 'AUMENTAR',
  reducir: 'REDUCIR',
  set: 'SET',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.aumentar:
      return { ...state, counter: state.counter + 1 };
    case actions.reducir:
      return { ...state, counter: state.counter - 1 };

    case actions.set:
      return { ...state, counter: Number(action.payload) };

    default:
      return state;
  }
};

const useChangeCounter = (initValue = 0) => {
  const [counter, setContador] = useState(0);

  const handlerAdd = () => {
    setContador(counter + 1);
  };

  const handlerSubstract = () => {
    setContador(counter - 1);
  };

  return [counter, handlerAdd, handlerSubstract];
};

const App = () => {
  //const [counter, handlerAdd, handlerSubstract] = useChangeCounter(0);
  const [state, dispatch] = useReducer(reducer, initValues);
  const [value, setValue] = useState(0);

  //* HACER REFERENCIA
  const buttonAddRef = useRef();

  useEffect(() => {
    document.title = `El valor es: ${state.counter}`;

    if (state.counter < 30) {
      buttonAddRef.current.style.backgroundColor = 'red';
    }

    if (state.counter < 20) {
      buttonAddRef.current.style.backgroundColor = 'yellow';
    }
    if (state.counter < 10) {
      buttonAddRef.current.style.backgroundColor = 'green';
    }
  }, [state.counter]);

  const handlerOnChangeSetValue = (e) => {
    return setValue(e.target.value);
  };

  return (
    <div>
      <p>Contador: {state.counter}</p>
      <button
        ref={buttonAddRef}
        onClick={() => dispatch({ type: actions.aumentar })}
      >
        Aumentar
      </button>
      <button onClick={() => dispatch({ type: actions.reducir })}>
        Reducir
      </button>
      <label htmlFor='setContador'>
        <span>Valor contador:</span>
        <input
          type='number'
          name='setContador'
          id='setContador'
          onChange={handlerOnChangeSetValue}
        />
      </label>
      <button onClick={(e) => dispatch({ type: actions.set, payload: value })}>
        Set Contador
      </button>
      <div>
        <ol>
          {state.todo.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default App;
