import { Component } from 'react';
import BubbleAlert from './BubbleAlert';
import DetallesCarro from './DetallesCarro';

const styles = {
  carro: {
    backgroundColor: '#359a2c',
    border: 'none',
    padding: '15px',
    borderRadius: '15px',
    cursor: 'pointer',
    color: '#fff',
    boxShadow: '1px 3px 10px rgba(53, 154, 44, 0.4)',
  },
  bubble: {
    position: 'relative',
    left: '12px',
    top: '20px',
  },
};

class Carro extends Component {
  render() {
    const { carro, mostrarCarro, esCarroVisible } = this.props;
    const cantidad = carro.reduce((acc, el) => acc + el.cantidad, 0);

    return (
      <div>
        <span style={styles.bubble}>
          {cantidad !== 0 ? <BubbleAlert value={cantidad} /> : null}
        </span>
        <button style={styles.carro} onClick={mostrarCarro}>
          Carro
        </button>
        {esCarroVisible ? <DetallesCarro carro={carro} /> : null}
      </div>
    );
  }
}

export default Carro;
