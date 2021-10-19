import { Switch, Route, Link, useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  console.log(history);

  const forward = () => {
    history.goForward();
  };

  const back = () => {
    history.goBack();
  };

  const push = (url) => {
    history.push(url);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/perfil'>Perfil</Link>
          </li>
        </ul>
      </nav>
      <section>
        <button onClick={back}>back</button>
        <button onClick={forward}>forward</button>
        <button onClick={() => push('/chanchitoFeliz')}>push</button>
        <Switch>
          <Route exact path='/perfil'>
            <h2>Perfil</h2>
          </Route>
          <Route exact path='/'>
            <h1>Inicio</h1>
          </Route>
          {/* //! URL 404 */}
          <Route path='*'>
            <h2>404: ruta no encontrada</h2>
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
