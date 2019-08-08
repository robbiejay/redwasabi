import React from 'react';
import PropTypes from 'prop-types';
import CopySectionItem from 'components/copySection/copySectionItem';
import { Container } from './copySection.css';

const CopySection = ({ items }) => (
  <Container>
  {items.map((item, i) => (
    <CopySectionItem {...item} key={i} />
  ))}
  </Container>
);

CopySection.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default CopySection;
