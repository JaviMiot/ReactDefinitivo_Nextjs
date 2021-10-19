import { createContext, useContext } from 'react';

/*
 ! Se crea el contexto 
 ! en donde se le pasa un valor por defecto
 */
const ContextDefault = createContext('valor por defecto');
const Context2 = createContext('valor por defecto 2');

//* Provider es el encargado de pasar el
//* contexto a los elementos hijos

const DefaultProvider = ({ children }) => {
  return <ContextDefault.Provider value={'mi valor'}>{children}</ContextDefault.Provider>;
};

const Contenido = () => {
  const ctx = useContext(ContextDefault);
  return <div>{ctx}</div>;
};

const Contenido2 = () => {
  const ctx = useContext(Context2);
  return <div>{ctx}</div>;
};

function App() {
  return (
    <DefaultProvider>
      <Contenido />
      <Contenido2 />
    </DefaultProvider>
  );
}

export default App;
