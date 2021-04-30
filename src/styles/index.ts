import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
      --background: #F4F4F4;
      --red: #EB0029;
      --black: #000000;
      --text: #434343;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    @media(max-width: 1168px){
      html{
        font-size: 87.5%;
      }
    }

    @media(max-width: 1000px){
        html{
            font-size: 81.25%;
        }
    }

    html,body {
      width: 100%;
      height: 100%;
      margin: 0px;
      padding: 0px;
      overflow-x: hidden;
    }

    /* body {
      background: #f4f4f4;
    } */


    body, input, textarea, button {
      font: 400 1rem 'Open Sans', sans-serif;
    }

    button {
      cursor: pointer;
    }
`;
