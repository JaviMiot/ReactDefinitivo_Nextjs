import { createStore } from 'redux';

const store = createStore((state = 0, action) => {
  //* es un reducer
  //* action = {type:'tipo de accion' , payload: any}

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
});

console.log(store.getState());
console.log(store.dispatch({ type: 'INCREMENTAR' })); //! dispatch ejectuta la funcion del reducer
console.log(store.getState());
console.log(store.dispatch({ type: 'DECREMENTAR' })); //! dispatch ejectuta la funcion del reducer
console.log(store.getState());
console.log(store.dispatch({ type: 'SET', payload: 3 })); //! dispatch ejectuta la funcion del reducer
console.log(store.getState());

function App() {
  return <div>Balto</div>;
}

export default App;
