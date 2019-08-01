import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Title from 'components/title';
import Layout from 'components/layout';
import Box from 'components/box';
import Bullets from 'components/bullets';
import Head from 'components/head';
import Img from 'gatsby-image';

const Maintenance = ({ data }) => (
  <Layout>
  <Box>
  <div className='header-text-container'>
    <Title as="h2" size="large">
      Got a problem? We can help you fix any issue on your site
    </Title>
  </div>
    <div className='header-img-container'>
    <Img fluid={data.imageTwo.childImageSharp.fluid} alt="" />
    </div>
  </Box>
  <Bullets items={data.maintenanceJson.bullets} />
  </Layout>
);
Maintenance.propTypes = {
  data: PropTypes.object.isRequired,
  bullets: PropTypes.object.isRequired
};

export default Maintenance;

export const query = graphql`
query MaintenanceQuery {
  imageTwo: file(relativePath: {eq: "images/maintenance.png"}) {
  childImageSharp {
    fluid(maxHeight: 220, quality: 90) {
      base64
      aspectRatio
      src
      srcSet
      srcWebp
      srcSetWebp
      sizes
      originalImg
      originalName
      }
    }
  }
  maintenanceJson {
  bullets {
    title
    copy
    image {
      childImageSharp {
        fluid(maxHeight: 500, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  }
}
`
