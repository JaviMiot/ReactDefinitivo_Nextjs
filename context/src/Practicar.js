import { createContext, useContext } from 'react';
/*
? 1. Debes crear un contexto este tendra un 
? valor por defecto que se pasa como parametro.
? 2. Se crea un Provider --> Que permitira pasar
? el contexto hacia bajo de sus componentes hijos
? 3. En provider debe tener el argumento de children
? ya que este pasara el contexto a los hijo y
? la propiedad - value -
? 4. El componente hijo debe usar el -- useContext --
? que tomara como parametro el contexto
*/

//! 1
const Context = createContext('Valor Por defecto');

//! 2
const Provider = ({ children }) => {
  //! 3 Tiene el parametro de children y value
  return <Context.Provider value={'es mi valor'}>{children}</Context.Provider>;
};

const Container = () => {
  const ctx = useContext(Context);
  return <div>{ctx}</div>;
};

const App = () => {
  return (
    <Provider>
      <Container />
    </Provider>
  );
};

export default App;
