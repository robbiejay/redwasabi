import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 500;
  margin: 2rem 2rem 1rem;
  font-size: 2rem;
  margin-top:7px;
  margin-left: 14px;
  font-family: 'Catamaran', sans-serif;
  line-height: 1.1em;
    color: #252525;
`;

export const Copy = styled.p`
  color: #fff;
  margin: 0 2rem 2rem;
  font-weight: 300;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  ${MEDIA.TABLET`
    margin-bottom: 4rem;
  `};
`;

  export const Img = styled.img`
  width: 64px;
  height: 64px;
  display: inline-block;
  float: left;
  `;
