import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './Filter.module.scss';
import { phoneBookSelectors, changeFilter } from '../../redux/phonebook';

const Filter = ({ filter, onChange }) => (
  <label className={styles.label}>
    Find contacts by name
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={onChange}
    />
  </label>
);

Filter.propTypes = {
  filter: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  filter: phoneBookSelectors.getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
