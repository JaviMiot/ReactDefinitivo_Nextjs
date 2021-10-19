import { Switch, Route, Link } from 'react-router-dom';

function App() {
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
