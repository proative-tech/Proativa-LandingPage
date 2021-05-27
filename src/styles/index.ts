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

      scroll-behavior: smooth;
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


    //modal estilizacao
    .react-modal-overlay {
    background: rgba(74, 74, 74, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    z-index: 999;
  }

  .react-modal-content {
    max-width: 463px;
    width: 100%;
    background: #fff;
    box-shadow: 10px -2px 10px #00000029;
    padding: 3rem;
    position: relative;

  }
`;
