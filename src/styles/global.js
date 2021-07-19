import { createGlobalStyle } from 'styled-components';
import colors from './colors';

export default createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    border:0;
    font-family: 'Raleway', sans-serif;
    scroll-behavior: smooth;
    scrollbar-width: 80px;
  }


  body{
    background: ${colors.white};
    color:${colors.secondary};
    -webkit-font-smoothing:antialiased;
  }

  body, button, input{
    font-size:16px
  }

  h1{
    font-weight:900
  }

  h2{
    font-weight: 700;
  }

  button{
    cursor:pointer
  }

  section{
    max-width: 1920px;
    max-height: 880px;
    min-width: calc(100vw - 80px);
    min-height: 100vh;
  }
`;