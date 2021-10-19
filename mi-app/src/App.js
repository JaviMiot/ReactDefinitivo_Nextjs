import React from 'react';
import Button from './Button';

const arr = [
  'chanchito feliz',
  'chanchito treiste',
  'chanchito emocionado',
  'chanchito sad',
];

const App = () => {
  const miVariable = false;

  if (miVariable) {
    return <p>mi variable dio true</p>;
  }
  return (
    <div>
      <h1 onClick={(e) => console.log('h1 clic', e)}>Hola mundo</h1>
      {arr.map((chancho) => {
        return <p key={chancho}>{chancho}</p>;
      })}

      <Button onClick={() => console.log('clic')}>Enviar</Button>
    </div>
  );
};

export default App;
