import styled from 'styled-components';

export const Button = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border-radius: 3px;
  border: none;
  color:#cae4ff;
  border: 2px solid #00ff8a;
  cursor: pointer;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 1px;
  font-size: 1.5rem;
  font-weight: 700;
  margin: 4rem 0 2rem;
  padding: 1rem 2rem;
  text-transform: uppercase;
  transition: 0.2s ease;
  box-shadow: inset 0.1px 0 0 0 #00ff8a;

  &:active,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.05);
    outline: none;
  }

  &:hover {
    background-color: #00ff8a;
    color: #fff;
    box-shadow: inset 290px 0 0 0 #00ff8a;
  }

  & + & {
    margin-left: 1rem;
  }
`;

export const Close = styled.button`
  -webkit-appearance: none;
  background-color: transparent;
  border: none;
  font-family: inherit;
  font-size: 4rem;
  font-weight: normal;
  padding: 1rem;
  line-height: 4rem;
  position: absolute;
  top: 0;
  right: 0;
  color: #fff;
`;
