import React from 'react';
import styles from './AppBar.module.scss';
import logo from '../../icons/logo.png';
import { CSSTransition } from 'react-transition-group';

import Navigation from '../Navigation';
import NavMenu from '../AuthorizationMenu/NavMenu';
import UserMenu from '../UserMenu';

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
          {/* {isAuthenticated ? <UserMenu /> : <NavMenu />} */}
          {false ? <UserMenu /> : <NavMenu />}
        </div>
      </div>
    </header>
  </CSSTransition>
);

export default AppBar;
