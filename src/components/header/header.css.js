import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4rem;
  font-family: 'IBM Plex Mono';

  @media (max-width: 768px) {
    flex-direction: column;
  }

  a {
    color: #ffffff;
    transition: color 0.2s ease;
    text-decoration: none;


    &:hover {
      color: inherit;
    }
  }
`;
