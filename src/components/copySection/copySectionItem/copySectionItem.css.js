import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.h2`
display: block;
font-size: 3rem;
font-weight: 500;
margin: 2rem 2rem 1rem;
font-size: 1.777em;
margin-top:7px;
margin-left: 14px;
font-family: 'Major Mono Display', monospace;
  color: #FFF;
  text-align: center;
  border-bottom: 2px dashed #fff;
  padding-bottom: 14px;
  width: 33.333%;
  margin-left: 33.333%;
`;

export const Copy = styled.p`
  color: #fff;
  font-size: 1.333em;
  margin: 0 2rem 2rem;
  margin-top: 70px;
  margin-bottom: 70px;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  text-align: center;
  padding-left: 33.333%;
  padding-right: 33.333%;
  line-height: 1.777em;
  letter-spacing: 2px;


  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

export const Img = styled.img`

display: inline-block;
float: left;
`;
