import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem 4rem;
  max-width: 700px;
  height: 350px;
  margin: 0 auto; 
  h2 {
      font-family: 'Major Mono Display', monospace;
  }

  @media (min-width: 1024px){
  width: 100vw;
  height: 50vh;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  perspective: 500px;
`;
