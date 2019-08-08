import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 4rem;
  line-height: 25px;
  padding: 0 4rem;
  padding-top: 14px;
  margin: 2rem 0;
  font-family: 'Roboto', serif;
  margin-bottom: 70px;


  ${MEDIA.TABLET`
    display: block;
  `};
`;
