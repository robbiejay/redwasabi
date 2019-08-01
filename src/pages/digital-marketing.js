import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
import Title from 'components/title';
import Layout from 'components/layout';
import Box from 'components/box';
import Bullets from 'components/bullets';
import Head from 'components/head';
import Img from 'gatsby-image';

const DigitalMarketing = ({ data }) => (
  <Layout>
  <Box>
  <div className='header-text-container'>
  <Title as="h2" size="large">
    Get yourself noticed! Hot marketing campaigns for any budget
  </Title>
  </div>
    <div className='header-img-container'>
    <Img fluid={data.imageMarketing.childImageSharp.fluid} alt="" />
    </div>
  </Box>
  <Bullets items={data.digitalmarketingJson.bullets} />
  </Layout>
);

DigitalMarketing.propTypes = {
  data: PropTypes.object.isRequired,
  bullets: PropTypes.object.isRequired
};

export default DigitalMarketing;

export const query = graphql`
query DigitalMarketingQuery {
  imageMarketing: file(relativePath: {eq: "images/marketing.png"}) {
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
  digitalmarketingJson {
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
