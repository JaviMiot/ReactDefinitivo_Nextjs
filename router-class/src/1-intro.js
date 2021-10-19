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
            <Link to='/portafolio'>Portafolio</Link>
          </li>
          <li>
            <Link to='/'>Inicio</Link>
          </li>

          <section>
            <Switch>
              <Route exact path='/portafolio'>
                <h1>Portafolio</h1>
              </Route>
              <Route exact path='/'>
                <h1>Inicio</h1>
              </Route>
            </Switch>
          </section>
        </ul>
      </nav>
    </div>
  );
}

export default App;
