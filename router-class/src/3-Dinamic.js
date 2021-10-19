import {
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

const Proyecto = () => {
  /*
   * Tanto useMatch y useParams traen los parametros
   * de la url, pero useRouteMatch trae adicional la url y el Path
   */

  const match = useRouteMatch();
  const params = useParams();
  console.log({ match, params });
  const { proyecto_id } = match.params;
  return <h2>Proyecto {proyecto_id}</h2>;
};

const Portafolio = () => {
  /*
   * Dentro de un componente dependera tambien
   * el useRouteMatch de lo que retorne, otro uso es usar
   * useMatch para crear la url y no volver a reescribir
   */

  //!url es para el LINK
  //!path para el Route
  const match = useRouteMatch();
  const { url, path } = match;

  return (
    <div>
      <h1>Portafolio</h1>
      <ul>
        <li>
          <Link to={`${url}/proyecto-1`}>Proyecto 1</Link>
        </li>
        <li>
          <Link to={`${url}/proyecto-2`}>Proyecto 2</Link>
        </li>
      </ul>
      <div>
        <Switch>
          <Route path={`${path}/:proyecto_id`}>
            <Proyecto />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Inicio</Link>
          </li>
          <li>
            <Link to='/portafolio'>Portafolio</Link>
          </li>
          <section>
            <Switch>
              <Route exact path='/'>
                <h1>Inicio</h1>
              </Route>
              <Route path='/portafolio'>
                <Portafolio />
              </Route>
            </Switch>
          </section>
        </ul>
      </nav>
    </div>
  );
}

export default App;
