import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: none;
    }

    @media(max-width: 1080px){
      html{
          font-size: 93.75%;
          }
    }

    @media(max-width: 720px){
        html{
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
      background: #f4f4f4;
    }


    body, input, textarea, button {
      font: 400 1rem 'Open Sans', sans-serif;
    }

    button {
      cursor: pointer;
    }
`;
