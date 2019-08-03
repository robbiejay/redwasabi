import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Img from 'gatsby-image';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import ModalForm from 'components/form';

const Index = ({ data }) => (
  <Layout>
    <Box>
    <h2 className='landing-page-header'>{data.homeJson.content.childMarkdownRemark.rawMarkdownBody}</h2>
      <Modal>
      <h3 className='modal-header'>Please fill out our enquiry form below</h3>
      <ModalForm/>
      </Modal>
      <div className='dec1-container'>
      <Img fluid={data.homeJson.dec1.childImageSharp.fluid}/>
      </div>
    </Box>
        <div style={{ height: '16.666vh' }} />
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '16.666vh' }} />

    <Box>
      <Title size="large">
        <h1 className='section-header'>Want to Upgrade from Squarespace?</h1>
      </Title>
      <h3 className='section-caption'>Elevate your online platform from just 3000HKD</h3>

      <Link className='section-link' to="/about">Upgrade Now</Link>
    </Box>
    <Box>
      <Title size="large">
        <h1 className='section-header'>Set up company Intranet</h1>
      </Title>
      <h3 className='section-caption'>Get the business suite tools your company needs to stay connected and boost productivity</h3>

      <Link className='section-link' to="/about">Find Out More</Link>
    </Box>
    <Box>
      <Title size="large">
        <h1 className='section-header'>Need a Wordpress developer?</h1>
      </Title>
      <h3 className='section-caption'>Get your Wordpress site up and running, or reach out for wordpress maintenance</h3>

      <Link className='section-link' to="/about">Find Out More</Link>
    </Box>
    <div style={{ height: '16.666vh' }} />
    <IOExample />
  </Layout>
);

Index.propTypes = {
  data: PropTypes.object.isRequired,
  dec1: PropTypes.object.isRequired
};

export default Index;

export const query = graphql`
  query HomepageQuery {
    imageOne: file(relativePath: {eq: "images/wasabi-header.png"}) {
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
    homeJson {
      title
      dec1 {
        childImageSharp {
          fluid(maxHeight: 500, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        link
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
`;
