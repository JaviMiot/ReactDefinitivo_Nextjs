import { createContext, Component, useContext } from 'react';

/*
 ? Si queremos traer varios contextos a un componente
 ? se puede hacer tanto para componentes basados en clases como 
 ? componentes funcionales, 
 ? Para el caso de componentes basados en clases se usara el - Consumer -
 ? Y para los funcionales el - useContex -
 */

const Context1 = createContext('contexto 1');
const Context2 = createContext('contexto 2');

const Provider = ({ children }) => {
  return (
    <Context1.Provider value='valor 1'>
      <Context2.Provider value='valor 2'>{children}</Context2.Provider>
    </Context1.Provider>
  );
};

//! Usando Consumer
class Componente extends Component {
  static contextType = Context1;
  render() {
    return (
      <Context1.Consumer>
        {(valor1) => (
          <Context2.Consumer>
            {(valor2) => <div>{`${valor1} ${valor2}`}</div>}
          </Context2.Consumer>
        )}
      </Context1.Consumer>
    );
  }
}

//! usando useContext

const Componente2 = () => {
  const valor1 = useContext(Context1);
  const valor2 = useContext(Context2);
  return <div>{`${valor1} ${valor2}`}</div>;
};

const App = () => {
  return (
    <Provider>
      <Componente />
      <Componente2 />
    </Provider>
  );
};

export default App;
