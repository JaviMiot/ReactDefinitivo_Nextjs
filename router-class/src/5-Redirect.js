import { Switch, Route, Link, Redirect } from 'react-router-dom';

const Portafolio = () => {
  const loggedIn = false;

  if (!loggedIn) {
    return <Redirect push to='/' />;
  }

  return <h1>Portafolio</h1>;
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/inicio'>Inicio</Link>
          </li>
          <li>
            <Link to='/perfil'>Perfil</Link>
          </li>
          <li>
            <Link to='/portafolio'>Portafolio</Link>
          </li>
        </ul>
      </nav>
      <section>
        <Switch>
          <Redirect exact from='/' to='/inicio' />
          <Route exact path='/portafolio'>
            <Portafolio />
          </Route>
          <Route exact path='/perfil'>
            <h2>Perfil</h2>
          </Route>
          <Route exact path='/'>
            <h1>Inicio</h1>
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
