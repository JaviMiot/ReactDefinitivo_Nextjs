import { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <label htmlFor=''>
        <input value={this.props.value} onChange={this.props.onChange} />
      </label>
    );
  }
}

class App extends Component {
  state = {
    nombre: '',
    apellido: '',
  };

  updateNombre(e) {
    console.log(this);
    this.updateValues('nombre', e.target.value);
  }

  updateValues(prop, value) {
    this.setState({ [prop]: value });
  }

  render() {
    return (
      <div>
        <span>
          Nombre: {this.state.nombre} {this.state.apellido}
        </span>
        <Input
          value={this.state.nombre}
          onChange={(e) => this.updateNombre(e)}
        />
        <Input
          value={this.state.apellido}
          onChange={(e) => {
            this.updateValues('apellido', e.target.value);
          }}
        />
      </div>
    );
  }
}

export default App;
