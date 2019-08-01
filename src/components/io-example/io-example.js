import React from 'react';
import IO from 'components/io';
import Title from 'components/title';
import { Container } from './io-example.css';

// <IO> uses a render prop to pass down `isVisible` and `hasBeenVisible`.
// In this example, we only care about `isVisible` and reset the styles
// every time we scroll back up. Use `hasBeenVisible` to keep the styles
// after scrolling back up and down again.
const IOExample = () => (
  <IO rootMargin="-50px">
    {({ isVisible }) => (
      <Container isVisible={isVisible}>
        <Title><h2>improve your website with our talented team of developers</h2></Title>

        <h3>Web Development</h3>


        <ul>
        <div className='grid-container'>
        <div>
        <li>Real-Time Web Applications</li>
        <li>eCommerce</li>
        <li>Intranet Development</li>
        </div>
        <div>
        <li>Mobile App Development</li>
        <li>Wordpress Development</li>
        <li>Hosting & Server Management</li>
        </div>
        <div>
        <li>Website Maintenance or Changes</li>
        <li>Fast Speeds in China</li>
        <li>Company Email Servers</li>
        <li>and more...</li>
        </div>
        </div>
        </ul>


        <h3>Digital Strategy & Marketing</h3>

        <ul>
        <div className='grid-container'>
        <div>
        <li>Advanced Analytics</li>
        <li>A/B Testing</li>
        <li>Social Media Content & Management</li>
        </div>
        <div>
        <li>Search Engine Optimisation (SEO)</li>
        <li>Ads on Google, Facebook, Instagram and more..</li>
        <li>Sponsored Posts</li>
        </div>
        <div>
        <li>Website Monitoring</li>
        <li>and more...</li>
        </div>
        </div>
        </ul>

        <h3>Design & Branding</h3>
        <ul>
        <div className='grid-container'>
        <div>
        <li>Web Design</li>
        <li>Video Editing & Production</li>
        <li>Logo Creation</li>
        </div>
        <div>
        <li>Brand Activation</li>
        <li>Brochures, Leaflets and other printed products</li>
        <li>Branded Products</li>
        </div>
        <div>
        <li>Wireframes</li>
        <li>Professional Photography</li>
        <li>and more...</li>
        </div>
        </div>
        </ul>
      </Container>
    )}
  </IO>
);

export default IOExample;
