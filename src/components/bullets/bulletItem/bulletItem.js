import React from 'react';
import Proptypes from 'prop-types';
import Img from 'gatsby-image';
import { Title, Copy } from './bulletItem.css';

const BulletItem = ({ title, copy, image }) => (
  <div>
  <div className='col-3'>
  <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
  </div>
  <div className='col-9'>
  <Title>{title}</Title>
  <Copy>{copy}</Copy>
  </div>
  </div>
);

BulletItem.propTypes = {
  title: Proptypes.string,
  copy: Proptypes.string,
  image: Proptypes.Object
};

export default BulletItem;
