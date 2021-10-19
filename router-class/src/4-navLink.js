import { Switch, Route, Link, useRouteMatch, NavLink } from 'react-router-dom';

const Proyecto = () => {
  /*
   * Tanto useMatch y useParams traen los parametros
   * de la url, pero useRouteMatch trae adicional la url y el Path
   */

  const match = useRouteMatch();

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
            {/* //! se asigna la clase cuando se activa */}
          <NavLink activeClassName='activado' to={`${url}/proyecto-1`}>
            Proyecto 1
          </NavLink>
        </li>
        <li>
            {/* //! se asigna un style cuando se activa */}
          <NavLink activeStyle={{ fontSize: 20 }} to={`${url}/proyecto-2`}>
            Proyecto 2
          </NavLink>
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
            <NavLink to='/'>Inicio</NavLink>
          </li>
          <li>
            <NavLink
            /* !
            ! define una funcion para asignar logica de cuando
            ! estara activa la url */
              isActive={(match, location) => {
                console.log({ match, location });
              }}
              to='/portafolio'
            >
              Portafolio
            </NavLink>
          </li>
          <section>
            <Switch>
                {/* //! forma de habilitar active con - exact - */}
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
