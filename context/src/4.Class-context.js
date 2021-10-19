import { createContext, Component } from 'react';

/*
 * Exite 2 formas de consumir el contexto en
 * componentes basados en clases.
 * 1. Hacer uso de una propiedad
 * estatica de - contextType -
 * 2. Asignar al componente la propiedad
 * - contextType -
 * OTRA FORMA DE LLAMAR EL CONTEXTO SIN ACCEDER
 * A UN ELEMENTO ES USAR EL - CONSUMER - DONDE SE
 * RECIBE UNA FUNCION QUE DARA COMO VALOR EL CONTEXTO
 */

const Context = createContext('mi valor');

const Provider = ({ children }) => {
  return <Context.Provider value='Otro valor'>{children}</Context.Provider>;
};

class Componente extends Component {
  //! 1. propiedad estatica
  //static contextType = Context;
  render() {
    console.log(this.context);
    return <div>Hola mundo</div>;
  }
}

//! asignar la propiedad - contextType -
Componente.contextType = Context;

const App = () => {
  return (
    <Provider>
      <Componente />
      {/* USANDO EL CONSUMER */}
      <Context.Consumer>{(valor) => <div>{valor}</div>}</Context.Consumer>
    </Provider>
  );
};

export default App;
