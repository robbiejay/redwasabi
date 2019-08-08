import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { Title, Copy } from './item.css';

const Item = ({ title, copy, image, link }) => (
  <figure>
  <div style={{width:'66.666%',marginLeft: '16.6666%'}}>
    <Img fluid={image ? image.childImageSharp.fluid : {}} alt={title} />
    </div>
    <figcaption>
      <Title>{title}</Title>
      <Copy>{copy}</Copy>
      <Link className='home-links' to={link}>Find out more...</Link>
    </figcaption>
  </figure>
);

Item.propTypes = {
  title: PropTypes.string,
  copy: PropTypes.string,
  link: PropTypes.string,
  image: PropTypes.object.isRequired,
};

export default Item;
