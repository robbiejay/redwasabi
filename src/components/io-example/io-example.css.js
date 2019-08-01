import styled from 'styled-components';
import { accent } from 'constants/theme';

export const Container = styled.div`
  padding: 4rem;
  margin: 4rem;
  border-radius: 10px;
  position: relative;
  text-align: center;
  color: #fff;
  transition: background-color 0.3s ease;
  background-color: ${({ isVisible }) => (isVisible ? accent : ' #333')};

  h2 {

    padding-bottom: 7px;
    font-family: 'Major Mono Display', monospace;
    font-size: 1.333em;
    color: #251d2d;
    width: 50%;
    margin-left: 25%;
  }

  h3 {
    font-size: 1.333em;
        font-family: 'Roboto', sans-serif;
    text-align: left;
    margin-left: 42px;
    color: #00ff8a;
    height: 42px;
    line-height: 42px;
    vertical-align:middle;
    background-color: #251d2d;
    margin-top: 42px;
    padding-left: 42px;
    width: 96%;
  }

  ul {

  }

  ul li {
      font-family: 'Roboto', sans-serif;
      padding-top: 7px;
      padding-bottom: 7px;
      text-align: left;
      color: #251d2d;
      font-weight: 300;

  }

  .underline {
    width: 100%;
background: linear-gradient(to right, rgba(0,255,138,1) 16%,rgba(255,255,255,1) 41%,rgba(0,255,138,1) 84%);    height: 4px;
    border-radius: 4px;
    margin-top: 7px;
  }

  .grid-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 4rem;
    margin-top: 7px;
    padding-top: 7px;
  }

@media (max-width: 520px) {
  .grid-container {
    display: block;
  }

    ul li {
    text-align: center;
    }

      h3 {
        width: 100%;
        margin-left: auto;
        margin-right: auto;
        padding-left: 14px;
        margin-top: 14px;
              text-align: center;

      }
      h2 {
      width: 90%;
      margin-left: 5%;
      margin-bottom: 14px;

    }
}

  .left-column {
    display: inline-block;
    float: left;
    width: 50%;
  }

  .right-column {
    display: inline-block;
    float: right;
    width: 50%;
  }
`;
