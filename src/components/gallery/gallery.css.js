import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 4rem;
  padding: 0 4rem;
  max-width: 1200px;
  margin: 0 auto;
  font-family: 'Roboto', serif;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
