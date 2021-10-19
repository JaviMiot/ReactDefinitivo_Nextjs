import React from 'react';
import logo from './logo.svg';
import './main.css';

const estilo = ({ bg = '#333' }) => ({
  backgroundColor: bg,
  color: 'white',
  padding: '10px 15px',
});

const estilo2 = {
  boxShadow: ' 0 5px 3px rgba(0,0,0,0.5)',
};

const Li = (props) => {
  const { children, estado } = props;
  console.log(props);
  return (
    <li className='class-li'>
      {children} esta {estado}
    </li>
  );
};

const App = () => {
  const valor = 'feliz';
  return (
    <ul>
      <Li estado={valor}> Javier</Li>
    </ul>
  );
};

export default App;
