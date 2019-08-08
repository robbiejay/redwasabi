import React from 'react';
import PropTypes from 'prop-types';
import Layout from 'components/layout';
import Img from 'gatsby-image';
import Box from 'components/box';
import Bullets from 'components/bullets';
import { graphql } from 'gatsby';
import Title from 'components/title';
import posed from 'react-pose'

const Pop = posed.div({
  enter: {
    staggerChildren: 100,
    transition: { duration: 300 },
    delay: 300
  }
})

const Ecommerce = ({ data }) => (
  <Layout>
  <Pop>

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
  </Pop>
  <Bullets items={data.ecommerceJson.bullets} />
  {/* <div className='package-container'>
    <div className='full-width'>
      <div className='package-card'>
        <div className='col-3'>
        <Img fluid={data.ecommerceJson.imageTwo.childImageSharp.fluid} alt="" />
        </div>
        <div className='col-9'>
        <h1>Package Maki</h1>
        <h2>eCommerce Starter</h2>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        </div>
      </div>
      <div className='package-card'>
        <div className='col-3'>
        <Img fluid={data.ecommerceJson.imageTwo.childImageSharp.fluid} alt="" />
        </div>
        <div className='col-9'>
        <h1>Package Maki</h1>
        <h2>eCommerce Starter</h2>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        <p>Thing</p>
        </div>
      </div>
    </div>
  </div> */}
  </Layout>
);

Ecommerce.propTypes = {
  data: PropTypes.object.isRequired,
  bullets: PropTypes.object.isRequired,
  imageOne: PropTypes.object.isRequired,
  imageTwo: PropTypes.object.isRequired,
  imageMaki: PropTypes.object.isRequired
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
  imageMaki: file(relativePath: {eq: "images/maki.png"}) {
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
        fluid(maxHeight: 98, quality: 100) {
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
