import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Img from 'gatsby-image';
import Box from 'components/box';
import Bullets from 'components/bullets';
import { graphql } from 'gatsby';
import Title from 'components/title';





const Ecommerce = ({ data }) => (
  <Layout>
  <Box>
  <div className='header-text-container'>
  <Title as="h2" size="large">
    Rapid and scalable solutions for any size business
  </Title>
  <div style={{height:4 + 'vh'}}></div>
  </div>
    <div className='header-img-container'>
    <Img fluid={data.imageEcommerce.childImageSharp.fluid} alt="" />
    </div>
  </Box>
  <Bullets items={data.ecommerceJson.bullets} />
  </Layout>
);

Ecommerce.propTypes = {
  data: PropTypes.object.isRequired,
  bullets: PropTypes.object.isRequired,
  imageOne: PropTypes.object.isRequired,
  imageTwo: PropTypes.object.isRequired
};

export default Ecommerce;

export const query = graphql`
query EcommerceQuery {
  imageEcommerce: file(relativePath: {eq: "images/ecommerce.png"}) {
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
  ecommerceJson {
    imageOne {
      childImageSharp {
        fluid(maxHeight: 64, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
        }
      }
    }
    imageTwo {
      childImageSharp {
        fluid(maxHeight: 64, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
          base64
          aspectRatio
          src
          srcSet
          srcWebp
          srcSetWebp
          sizes
          originalImg
        }
      }
    }
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

// export const query = graphql`
//   query EcommerceQuery {
//     homeJson {
//     title
//     content {
//       childMarkdownRemark {
//         html
//         rawMarkdownBody
//       }
//     }
//   }
// }
// `
