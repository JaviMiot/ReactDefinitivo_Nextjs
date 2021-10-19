import { Component } from 'react';
import Logo from './Logo';
import Carro from './Carro';

const styles = {
  navbar: {
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '0 50px',
    boxShadow: '0 2px 3px rgba(0, 0, 0, 0.2)',
  },
};

class Navbar extends Component {
  render() {
    const { carro, mostrarCarro, esCarroVisible } = this.props;
    return (
      <nav style={styles.navbar}>
        <Logo />
        <Carro
          carro={carro}
          mostrarCarro={mostrarCarro}
          esCarroVisible={esCarroVisible}
        />
      </nav>
    );
  }
}

export default Navbar;
