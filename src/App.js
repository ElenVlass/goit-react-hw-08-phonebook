import { Component, Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import LoaderSpiner from './components/Loader';
import Layout from './components/Layout';
import routes from './routes';
import { authOperations } from './redux/authorization';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

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
  componentDidMount() {
    this.props.onRefreshUser();
  }

  render() {
    return (
      <Layout>
        <Suspense fallback={<LoaderSpiner />}>
          <Switch>
            <PrivateRoute
              path={routes.contacts}
              component={PhonebookView}
              redirectTo={routes.login}
            />
            <Route path={routes.home} exact component={HomeView} />
            <Route path={routes.login} exact component={LogInView} />
            <Route path={routes.register} exact component={RegisterView} />
          </Switch>
        </Suspense>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onRefreshUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
