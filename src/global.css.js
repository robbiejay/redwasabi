import { createGlobalStyle } from 'styled-components';
import { accent } from 'constants/theme';
export default createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
    line-height: 1;
    font-size: 1.6rem;
    color: #000;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    -webkit-font-feature-settings: "pnum";
    font-feature-settings: "pnum";
    font-variant-numeric: proportional-nums;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  a {
    color: ${accent};
  }

  pre {
    display: block;
    padding: 2rem;
    margin-top: 4rem;
    overflow: auto;
    font-size: 85%;
    line-height: 1.45;
    border-radius: 5px;
    color: ${accent};
    border: 1px solid #ddd;
    font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace;
  }

  video {
    max-width: 100%;
  }

  p {
    margin-bottom: 2rem;
  }

  .col-3 {
    float: left;
    display: inline-block;
    width: 25%;
  }

  .col-9 {
    float: left;
    display: inline-block;
    width: 75%;
  }

  .dec1-container {
    width: 512px;
    height: 512px;
    position: absolute;
    right: 0px;
    top: 84px;
    opacity: 1;
    transition: 1s ease-in-out;
    cursor: crosshair;
  }

@media (max-width: 1080px) {
  .dec1-container {
opacity: 0.5;
z-index: 0;
  }
}



  .landing-page-header {
    margin-top: 16.666vh;
    font-size: 1.777em;
    z-index: 0;
    position: relative;
  }

  .section-header {
    font-family: 'Major Mono Display', monospace;
  }

  .section-caption {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    color: #333;
    margin-top: 7px;
  }

  .section-link {
    border: 2px solid #00ff8a;
    padding: 14px 14px;
    border-radius: 3px;
    text-align: center;
    text-decoration: none;
    display:inline-block;
    font-weight: 700;
    margin-top: 14px;
    width: 33.333%;
    letter-spacing;
    transition: 0.3s;
    box-shadow: inset 0 0 0 0.01px white;
  }

  .section-link:hover {

    box-shadow: inset 290px 0 0 0 #00ff8a;
    color: #fff;
  }

  .header-text-container {
    display: inline-block;
    width: 66.666%;
    float; left;
  }

  .header-img-container {
    display: inline-block;
    width: 33.333%;
    float; right;
    margin: auto;
  }

  .sub-card {
    display:inline-block;
    height: 240px;
    width: 30.333%
    float: left;
    margin-left: 3%;
  }

    .sub-card h3 {
      margin-bottom: 14px;
      font-size: 1.333em;
      margin-top:7px;
      margin-left: 14px;
    }

    .sub-card p {
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
    }

  .sub-card .text-container  {
    display: inline-block;
    width: 64.222%;
    margin-left: 2%;
    float: left;
  }

  .subheading-img {
    width: 64px;
    height: 64px;
    display: inline-block;
    float: left;

  }

  .home-links {
    margin-left: 20px;
  }

  .modal-header {
    margin-bottom: 21px;
    margin-left: 5%;
  }

  .form-group {
    display: block;

  }
  .form-group label {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    color: rgba(77,0,143,0.66);
    display: block;
    margin-top: 7px;
    margin-bottom: 3px;
    margin-left: 5%;
    font-size: 0.75em;
  }

  .form-group input {
    width: 86.8%;
    margin-left: 5%;
    border-radius: 7px;
    box-shadow: none;
    border: 2px solid #00ff8a;
    line-height: 2em;
    vertical-align: middle;
    padding-left: 14px;
    margin-bottom: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
  }

  .form-group textarea {
    width: 86.4%;
    margin-left: 5%;
    border-radius: 7px;
    box-shadow: none;
    border: 2px solid #00ff8a;
    line-height: 1.333em;
    padding-left: 14px;
    margin-bottom: 14px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    resize: none;
  }

  input[type=submit] {
    border: none;
    background-color: #00ff8a;
    color: #fff;
    font-family: 'Roboto', sans-serif;
    font-weight 700em;
    width: 90%;
    margin-left: 5%;
    padding: 14px;
    margin-top: 14px;
  }

  input[type=range] {
  -webkit-appearance: none;
  margin: 18px 0;
  width: 86.8%;
  margin-left: 5%;

  background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(77,0,143,1) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */


}
input[type=range]:focus {
  outline: none;
}
input[type=range]::-webkit-slider-runnable-track {
  width: 100%;
  height: 7px;
  cursor: pointer;
  animate: 0.2s;
  border-radius: 1.3px;

}
input[type=range]::-webkit-slider-thumb {

  height: 34px;
  width: 34px;
  border-radius: 100%
  background: #00ff8a;
  cursor: pointer;
  -webkit-appearance: none;
  margin-left: -14px;
  margin-top: -14px;
  box-shadow: inset 0px 10px 10px 0px rgba(255,255,255,0.5);

}

input[type=range]:focus::-webkit-slider-runnable-track {
  outline: none;
  box-shadow: none;

}
input[type=range]::-moz-range-track {
  width: 100%;
  height: 4.4px;
  cursor: pointer;
  animate: 0.2s;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  background: none;
  border-radius: 1.3px;
  border: 0.2px solid #010101;
}
input[type=range]::-moz-range-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]::-ms-track {
  width: 100%;
  height: 8.4px;
  cursor: pointer;
  animate: 0.2s;
  background: transparent;
  border-color: transparent;
  border-width: 16px 0;
  color: transparent;
}
input[type=range]::-ms-fill-lower {
  background: none;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-fill-upper {
  background: none;
  border: 0.2px solid #010101;
  border-radius: 2.6px;
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
}
input[type=range]::-ms-thumb {
  box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
  border: 1px solid #000000;
  height: 36px;
  width: 16px;
  border-radius: 3px;
  background: #ffffff;
  cursor: pointer;
}
input[type=range]:focus::-ms-fill-lower {
  background: none;
}
input[type=range]:focus::-ms-fill-upper {
  background: none;
}
`;
