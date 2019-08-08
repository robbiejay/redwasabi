import React from 'react';
import Proptypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './copySectionItem.css';


const CopySectionItem = ({ title, copy, image }) => (
  <div>
  <Title>{title}</Title>
  <Copy>{copy}</Copy>
  </div>
);

CopySectionItem.propTypes = {
  title: Proptypes.string,
  copy: Proptypes.string,
  image: Proptypes.Object
};

export default CopySectionItem;
