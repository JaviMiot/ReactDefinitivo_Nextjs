import { useState } from 'react';
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';

const App = () => {
  const [usuarios, setUsuarios] = useState([]);

  const submit = (usuario) => {
    setUsuarios([...usuarios, usuario]);
  };
  console.log(usuarios);
  return (
    <div style={{ marginTop: '15%' }}>
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <UserForm submit={submit} />
          </div>
        </Card>
        <ul>
          {usuarios.map((usuario) => (
            <li
              key={usuario.email}
            >{`${usuario.name} ${usuario.lastname} ${usuario.email}`}</li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default App;
