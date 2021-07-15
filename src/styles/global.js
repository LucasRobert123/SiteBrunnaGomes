import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    border:0;
    font-family: 'Raleway', sans-serif;
  }

  body{
    background: ${colors.white};
    color:#fff;
    -webkit-font-smoothing:antialiased
  }

  body, button, input{
    font-size:16px
  }

  h1,h2,h3,h4,h5,h6, strong{
    font-weight:900
  }

  button{
    cursor:pointer
  }
`;