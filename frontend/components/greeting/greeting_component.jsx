import React from 'react';
import { Link } from 'react-router-dom';


const personalGreeting = (currentUser, logout) => (
  <header>
  <h1>Hi, {currentUser.username}</h1>
  <button onClick={logout}>Logout!</button>
  </header>
);

const loginRequired = () => (
  <section className="sign-in">
  <Link to="/signup">Sign Up!</Link>
  <Link to="/login">Login!</Link>
  </section>
);

const Greeting = ({ currentUser, logout }) => (
  currentUser ? personalGreeting(currentUser, logout) : loginRequired()
);

export default Greeting;
