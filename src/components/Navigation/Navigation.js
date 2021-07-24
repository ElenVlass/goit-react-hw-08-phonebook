import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.scss';

const Navigation = () => (
  <ul className={styles.NavList}>
    <li className={styles.List}>
      <NavLink
        to={routes.home}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Home
      </NavLink>
    </li>
    <li className={styles.List}>
      <NavLink
        to={routes.contacts}
        className={styles.NavLink}
        activeClassName={styles.NavLink__active}
      >
        Phonebook
      </NavLink>
    </li>
  </ul>
);
export default Navigation;
