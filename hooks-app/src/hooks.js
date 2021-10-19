import React from 'react';

//* funciones impuras cuando
//* cambian su valor al ejecutar
//* tambien al llamar una db o una api
//! en el caso de las arrow funtiosn siempre
//! devuelven lo mismo
const impura = () => new Date().toLocaleDateString();

console.log(impura());

const MiComponente = ({ nombre }) => {
  return <div>Hola {nombre}</div>;
};

const App = () => {
  return <MiComponente nombre='Javier' />;
};

export default App;
