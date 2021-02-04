import ThemeProvider from './theme/ThemeProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
// PAGES
import Home from './pages/Home';
import About from './pages/About';
import Subscribe from './pages/Subscribe';
import ROUTES from './pages/routes';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Switch>
          <Route path={ROUTES.ABOUT}>
            <About />
          </Route>
          <Route path={ROUTES.SUBSCRIBE}>
            <Subscribe />
          </Route>
          <Route path={ROUTES.HOME} exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
