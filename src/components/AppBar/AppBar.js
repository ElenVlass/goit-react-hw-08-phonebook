import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import styles from './AppBar.module.scss';
import logo from '../../icons/logo.png';
import Navigation from '../Navigation';
import AuthorizationMenu from '../AuthorizationMenu';
import UserMenu from '../UserMenu';
import { authSelectors } from '../../redux/authorization';

const AppBar = ({ isAuthenticated }) => (
  <CSSTransition
    in={true}
    appear={true}
    timeout={250}
    classNames={styles}
    unmountOnExit
  >
    <header className={styles.AppBar}>
      <div className={styles.Logo}>
        <img src={logo} alt="logo" width="60" />
      </div>
      <div className={styles.Navigation}>
        <Navigation />
        <div className={styles.BarMenu}>
          {isAuthenticated ? <UserMenu /> : <AuthorizationMenu />}
        </div>
      </div>
    </header>
  </CSSTransition>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
