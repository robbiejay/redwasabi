import React from 'react';
import { Link } from 'gatsby';
import { Container } from './nav.css';

const Nav = () => (
  <Container>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/mobile-apps">Apps</Link>
      </li>
      <li>
        <Link to="/maintenance">Maintenance</Link>
      </li>
      <li>
        <Link to="/ecommerce">eCommerce</Link>
      </li>
      <li>
        <Link to="/digital-marketing">Marketing</Link>
      </li>
      <li>
        <a href="https://github.com/fabe/gatsby-universal">GitHub</a>
      </li>
    </ul>
  </Container>
);

export default Nav;
