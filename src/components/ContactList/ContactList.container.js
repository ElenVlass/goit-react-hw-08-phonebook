import { connect } from 'react-redux';
import ContactList from './ContactList';
import { phoneBookSelectors, operations } from '../../redux';

const mapStateToProps = state => ({
  list: phoneBookSelectors.getSpecifiedContacts(state),
  isLoading: phoneBookSelectors.getIsLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(operations.deleteContact(id)),
  fetchContacts: () => dispatch(operations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
