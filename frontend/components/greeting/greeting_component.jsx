import React from 'react';
import { Link } from 'react-router-dom';


const personalGreeting = ({ currentUser, logout}) => (
  <header>
  <h1>{currentUser.username}</h1>
  <button onClick={logout}></button>
  </header>
);

const loginRequired = () => (
  <section>
  <Link to="/signup">Sign Up!</Link>
  <Link to="/login">Login!</Link>
  </section>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : loginRequired()
);

export default Greeting;
