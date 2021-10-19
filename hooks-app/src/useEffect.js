import { useState, useEffect, Component } from 'react';

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return [contador, incrementar];
};

/* const Interval = ({ contador }) => {
  useEffect(() => {
    const i = setInterval(() => {
      console.log(contador);
    }, 1000);

    //? en el return desuscribe
    return () => clearInterval(i);
  }, [contador]);

  return <p>Intervalo</p>;
}; */

class Interval extends Component {
  intervalo = '';

  componentDidMount() {
    this.intervalo = setInterval(() => console.log(this.props.contador), 1000);
  }
  componentDidUpdate() {
    console.log('actualiza');
  }

  componentWillUnmount() {
    clearInterval(this.intervalo);
  }

  render() {
    return <p>Intervalo</p>;
  }
}

const App = () => {
  const [contador, incrementar] = useContador(0);

  useEffect(() => {
    document.title = `El valor es: ${contador}`;
  }, [contador]);

  return (
    <div>
      contador : {contador}
      <button onClick={incrementar}>Incrementar</button>
      <Interval contador={contador} />
    </div>
  );
};

export default App;
