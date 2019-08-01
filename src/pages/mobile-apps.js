import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Title from 'components/title';
import Layout from 'components/layout';
import Box from 'components/box';
import Bullets from 'components/bullets';
import Head from 'components/head';
import Img from 'gatsby-image';

const MobileApps = ({ data }) => (
  <Layout>
  <Box>
  <div className='header-text-container'>
  <Title as="h2" size="large">
    Get the power of a mobile application in the palm of your hand!
  </Title>
  </div>
    <div className='header-img-container'>
    <Img fluid={data.imageThree.childImageSharp.fluid} alt="" />
    </div>
  </Box>
  <Bullets items={data.mobileappsJson.bullets} />
  </Layout>
);

MobileApps.propTypes = {
  data: PropTypes.object.isRequired,
  bullets: PropTypes.object.isRequired
};

export default MobileApps;

export const query = graphql`
query MobileAppsQuery {
  imageThree: file(relativePath: {eq: "images/mobile-apps.png"}) {
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
  mobileappsJson {
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
