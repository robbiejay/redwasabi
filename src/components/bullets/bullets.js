import React from 'react';
import PropTypes from 'prop-types';
import BulletItem from 'components/bullets/bulletItem';
import { Container } from './bullets.css';

const Bullets = ({ items }) => (
  <Container>
  {items.map((item, i) => (
    <BulletItem {...item} key={i} />
  ))}
  </Container>
);

Bullets.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Bullets;
