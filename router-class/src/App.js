import { Switch, Route, Link, useLocation } from 'react-router-dom';

//* Esta funcion parsea los queries 
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
function App() {
  const query = useQuery();

  const chancho = query.get('chancho');
  const nombre = query.get('nombre');

  console.log({ chancho, nombre });

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
