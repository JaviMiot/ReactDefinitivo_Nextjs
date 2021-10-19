import { Component } from 'react';

class Button extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log('constructor', props);
  }

  componentDidMount() {
    //* se ejecuta luego del render
    console.log('componentDidMout');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount', this.props, this.state);
  }

  componentDidUpdate(preProps, prevState) {
    //* recibe props anteriores y estado anterior
    console.log('didUpdate', preProps, prevState);
  }

  render() {
    console.log('ejecutando metodo render de button');
    return (
      <button onClick={() => this.setState({ prop: 1 })}>Enviar button</button>
    );
  }
}

class App extends Component {
  state = {
    valor: 3,
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hola Mundo!!</p>
        {this.state.valor === 3 ? <Button chanchito='feliz' /> : null}
        <button
          className={this.state.valor}
          onClick={() => this.setState({ valor: this.state.valor + 1 })}
        >
          Enviar en app
        </button>
      </div>
    );
  }
}

export default App;
