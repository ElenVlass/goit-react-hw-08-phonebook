import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import routes from '../../routes';

const NavMenu = () => (
  <ul className={styles.NavList}>
    <li className={styles.List}>
      <NavLink
        to={routes.login}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        LogIn
      </NavLink>
    </li>
    <li className={styles.List}>
      <NavLink
        to={routes.register}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Register
      </NavLink>
    </li>
  </ul>
);

export default NavMenu;
