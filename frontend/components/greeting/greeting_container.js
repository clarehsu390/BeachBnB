import { connect } from 'react-redux';
import { requestLogout } from '../../actions/session_actions';
import Greeting from './greeting_component';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  logout: () => (dispatch(requestLogout))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
