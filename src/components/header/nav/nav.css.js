import styled from 'styled-components';

export const Container = styled.nav`
  ul {
    display: flex;
    list-style: none;
    padding: 0;

    @media (max-width: 768px){
      flex-direction: column;
    }
    li {
      text-transform: uppercase;
      font-size: 1.3rem;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 15px;
      @media (min-width: 768px) {
        & + li {
          margin-left: 2rem;
        }
      }
      
    }
  }
`;
