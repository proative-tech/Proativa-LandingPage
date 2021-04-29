import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F4F4F4;
    --red: #EB0029;
    --black: #000000;
    --text: #434343;  
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px){
      font-size: 93.75%; 
    }

    @media (max-width: 720px){
      font-size: 87.5%; 
    }
  }

  html,body {
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      overflow-x: hidden;
    }

  body {
    --webkit-font-font-smooth: antialiased;
    overflow-x: hidden;
  }

  body, input, textarea, button {
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

`