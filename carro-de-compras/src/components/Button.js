import { Component } from 'react';

const styles = {
  button: {
    backgroundColor: '#0A283E',
    color: '#fff',
    padding: '15px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '1px 5px 12px rgb(10, 26, 38, 0.31)',
  },
};

class Button extends Component {
  render() {
    return <button style={styles.button} {...this.props}></button>;
  }
}

export default Button;
