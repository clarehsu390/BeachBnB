import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state);
  }

  update(property) {
    return e => this.setState({ [property]: e.target.value });
  }

  render() {
    return (
      <form className='login' onSubmit={this.handleSubmit}>
        <input
          type='text'
          value={this.state.username}
          placeholder='username'
          onChange={this.update('username')}
          />
        <input
          type='password'
          value={this.state.password}
          placeholder='password'
          onChange={this.update('password')}
          />
        <button>Login</button>
      </form>
    );
  }

}

export default SessionForm;
