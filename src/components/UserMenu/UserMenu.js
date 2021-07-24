import React from 'react';
import { connect } from 'react-redux';
import defaultAvatar from '../../icons/login.png';
import styles from './UserMenu.module.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={styles.UserMenu}>
    <img src={avatar} alt="" width="32" />
    <span className={styles.UserName}>Welcome, {name}</span>
    <button type="button" onClick={onLogout} className={styles.button}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  avatar: defaultAvatar,
  name: 'NoName',
});
const mapDispatchToProps = dispatch => ({
  onLogout: () => null,
});
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
