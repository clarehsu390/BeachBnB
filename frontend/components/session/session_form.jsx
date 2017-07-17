import { connect } from 'redux';
import SessionFrom from './session_form';
import { requestLogin, requestSignup } from '../actions/session_actions'

const mapStateToProps = ({ session }, ownProps) => ({
  loggedIn: session.loggedIn,
  errors: session.errors,
  formType: session.formType
});

const mapDispatchToProps = dispatch => ({
  processForm: (user, formType) => {
    const processForm = { formType === 'login'} ? requestLogin : requestSignup;

  }
})
