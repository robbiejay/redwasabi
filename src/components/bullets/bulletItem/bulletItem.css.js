import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Title = styled.span`
  display: block;
  font-size: 2rem;
  font-weight: 700;
  margin: 2rem 2rem 1rem;
  font-size: 2rem;
  margin-top:14px;
  margin-left: 14px;
  font-family: 'Roboto', sans-serif;
  line-height: 1.1em;
    color: #fff;
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
