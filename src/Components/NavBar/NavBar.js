import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <h3>Deportivo MultiMarca</h3>
      <ul className="nav-list">
  <li><Link to="/category/Puma">Puma</Link></li>
  <li><Link to="/category/Nike">Nike</Link></li>
  <li><Link to="/category/Adidas">Adidas</Link></li>
</ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
