import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import LoaderSpiner from './components/Loader';
import Layout from './components/Layout';
import routes from './routes';

const HomeView = lazy(() =>
  import('./views/HomeView.js' /* webpackChunkName: "home-view" */),
);
const PhonebookView = lazy(() =>
  import('./views/PhonebookView.js' /* webpackChunkName: "phonebook-view" */),
);
const LogInView = lazy(() =>
  import('./views/LogInView.js' /* webpackChunkName: "login-view" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView.js' /* webpackChunkName: "register-view" */),
);

class App extends Component {
  render() {
    return (
      <Layout>
        <Suspense fallback={<LoaderSpiner />}>
          <Switch>
            <Route path={routes.contacts} component={PhonebookView} />
            <Route path={routes.home} exact component={HomeView} />
            <Route path={routes.login} exact component={LogInView} />
            <Route path={routes.register} exact component={RegisterView} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

export default App;
