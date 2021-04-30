import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1085px;
  margin: 0 auto;

  position: relative;

  min-height: calc(100vh - 155px);
`;

export const ContainerTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  left: 40px;

  @media (max-width: 1322px) {
    left: 0;
  }

  @media (max-width: 1255px) {
    padding-right: 26px;
    padding-left: 16px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;

    padding:0 36px;
  }
`;

export const Content = styled.section`
  min-width: 45%;

  > div.content__text {
    margin-bottom: 3.125rem;

    h1 {
      font-size: 3rem;
      line-height: 3.5625rem;
      font-family: 'Source Sans Pro';
    }

    p {
      font-size: 1rem;
      line-height: 1.75rem;
      line-height: 'Open Sans';
      color: #434343;

      margin-top: 13px;
    }
  }

  > div.content__btns {
    display: flex;
    align-items: center;
    margin-bottom: 50px;

    div + div {
      margin-left: 18px;
    }
  }

  > div.content__socialMedia {
    margin-left: 2px;

    a {
      font-size: 1rem;
      line-height: 1.5625rem;
      color: #000;
      font-weight: 600;
      font-family: 'Source Sans Pro';
      text-decoration: none;
      display: inline-block;

      &::after {
        content: '';
        display: block;
        width: 100%;
        height: 0.12rem;
        background: #ADABAC;
        transform: scale(0, 1);
        transform-origin: 0% 100%;
        transition: transform 0.3s ease;
      }

      &:hover::after {
        transform: scale(1, 1);
      }
    }

    a:nth-child(2) {
      position: relative;

      &::before {
        content: "";
        background: #C4C4C4;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        position: relative;
        display: inline-block;
        margin-right: 20px;
      }

      &::after {
        width: calc(100% - 26px);
        margin-left: 26px;
      }
    }

    a + a {
      margin-left: 20px;
    }
  }

  @media (max-width: 1255px) {
    width: 50%;
  }

  @media (max-width: 985px) {
    width: 55%;
  }

  @media (max-width: 853px) {
    width: 60%;
  }

  @media (max-width: 768px) {
    width: 85%;

    z-index: 15;

    > div.content__btns {
      flex-direction: column;
      width: 80%;

      div + div {
        margin-left: 0;
        margin-top: 1rem;
      }

      > div.containerBtn {
        width: 100%;
      }
    }
  }

  @media (max-width: 569px) {
    width: 100%;
  }

  @media (max-width: 490px) {
    width: 90%;

    > div.content__text {
     h1 {
      font-size: 26px;
      line-height: 34px;
     }

     p {
       font-size: 12px;
       line-height: 24px;
     }
    }
  }

  @media (max-width: 360px)  {
   width: 100%;
  }
`;

export const ContainerImg = styled.section`
  @media (max-width: 1255px) {
    width: 55%;

    img {
      width: 100%;
    }
  }

  @media (max-width: 985px) {
    width: 45%;
  }

  @media (max-width: 853px) {
    width: 40%;
  }

  @media (max-width: 768px) {
    width: 100%;

    position: relative;
    left: -90px;
    top: -100px;

    img {
      width: 130%;
    }
  }

  @media (max-width: 644px) {
    img {
      width: 140%;
    }
  }

  @media (max-width: 585px) {
    img {
      width: 145%;
    }
  }

  @media (max-width: 456px) {
    img {
      width: 150%;
    }
  }

  @media (max-width: 402px) {
    img {
      width: 160%;
    }
  }

  @media (max-width: 360px) {
    img {
      width: 170%;
    }
  }
`;


export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;
`;
