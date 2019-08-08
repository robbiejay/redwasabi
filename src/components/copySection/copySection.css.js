import styled from 'styled-components';
import MEDIA from 'helpers/mediaTemplates';

export const Container = styled.div`

  display: block;
  padding: 0 4rem;
  margin: 2rem 0;
  font-family: 'Roboto', serif;
  border-radius: 7px;
  letter-spacing: 1px;

  ${MEDIA.TABLET`
    display: block;
  `};
`;
