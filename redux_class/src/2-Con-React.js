import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/*
 ? useDispatch permite enviar las acciones
 ? tiene como argumento un objeto {type: '', payload: ''}
 
 ? useSelector permite obtener el state, recibe
 ? como argumento una function donde retorna los estados
 */

export const reducer = (state = 0, action) => {
  console.log({ action, state });
  switch (action.type) {
    case 'INCREMENTAR':
      return state + 1;
    case 'DECREMENTAR':
      return state - 1;
    case 'SET':
      return action.payload;
    default:
      return state;
  }
};

function App() {
  const [valor, setValor] = useState(0);
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const handleSet = () => {
    dispatch({ type: 'SET', payload: valor });
    setValor('');
  };
  return (
    <div>
      <p>Contador: {state}</p>
      <button onClick={() => dispatch({ type: 'INCREMENTAR' })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENTAR' })}>
        Decrementar
      </button>
      <button onClick={handleSet}>Set</button>
      <input
        type='number'
        value={valor}
        onChange={(event) => {
          setValor(event.target.value);
        }}
      />
    </div>
  );
}

export default App;
