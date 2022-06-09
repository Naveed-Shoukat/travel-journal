import React from 'react';
import Logo from '../Assets/logo.svg';
import '../Styles/Nav.css';

export default function Nav() {
  return (
    <div className="navbar">
      <img className="navbar--logo" src={Logo} alt="" />
      <h1 className="navbar--title">my travel journal</h1>
    </div>
  );
}
