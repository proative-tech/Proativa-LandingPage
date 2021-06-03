import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../Informations/styles';

export const ContainerImg = styled.div`
  max-width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  div.video {
    content: '';
    max-width: 595px;
    width: 100%;
    max-height: 347px;
    height: 100%;

    background: #e5e5e5;
  }

  @media (max-width: 1244px) {
    margin-left: 3rem;
  }

  @media (max-width: 928px) {
    margin-left: 0;

    min-height: 348px;

    align-items: flex-start;
    justify-content: flex-start;

    div.video {
      max-width: 100%;
      width: 100%;
      height: 348px;
    }
  }

  @media (max-width: 490px) {
    min-height: 210px;

    div.video {
      height: 210px;
    }
  }
`;

export const Content = styled.div`
  padding: 4.9rem 4rem 63px;
  width: 92%;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1441px) {
    max-width: 780px;
    width: 100%;
    margin-left: 5%;
  }

  @media (max-width: 1399px) {
    padding-top: 3.9rem;
    padding-bottom: 3.4rem;

    width: 95%;
  }

  @media (max-width: 1440px) {
    padding-top: 3.9rem;
    padding-bottom: 3.4rem;
    width: 95%;

    h1 {
      margin-top: 10px;
      // margin-right: 30px;
      margin-bottom: 20px;
    }
    // p{
    //   margin-right: 120px;
    // }
  }

  @media (max-width: 1343px) {
    padding-top: 3.4rem;
    padding-right: 2rem;
  }

  @media (max-width: 1260px) {
    width: 100%;
  }

  @media (max-width: 1260px) {
    padding-left: 30px;
  }
`;

export const Header = styled.div`
  margin-bottom: 25px;

  span {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #eb0029;
    font-weight: 300;
    font-family: 'Source Sans Pro';
  }

  h1 {
    font-size: 2.25rem;
    line-height: 3.125rem;
    font-family: 'Source Sans Pro';
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    color: #434343;

    margin-top: 1rem;
  }

  p.textPage {
    font-size: 1rem;
    line-height: 1.875rem;
    color: #434343;

    & + p.textPage {
      margin-top: 2rem;
    }
  }

  @media (min-width: 1558px) {
    max-width: 83%;

    p {
      width: 70%;
    }
  }

  @media (max-width: 1557px) {
    max-width: 83%;
    p {
      max-width: 83%;
    }
  }

  @media (min-width: 1441px) {
    max-width: 74%;
    p {
      max-width: 83%;
    }
  }

  @media (max-width: 1441px) {
    max-width: 83%;
    p {
      max-width: 83%;
    }
  }

  @media (max-width: 1367px) {
    max-width: 83%;
  }

  @media (max-width: 1260px) {
    p {
      margin-top: 17px;
    }
  }

  @media (max-width: 928px) {
    max-width: 70%;
  }

  @media (max-width: 669px) {
    max-width: 80%;
  }

  @media (max-width: 593px) {
    max-width: 90%;
  }

  @media (max-width: 490px) {
    max-width: 90%;

    span {
      font-size: 14px;
      line-height: 19px;
    }

    h1 {
      font-size: 20px;
      line-height: 28px;
    }

    p {
      font-size: 12px;
      line-height: 24px;
    }
  }

  @media (max-width: 390px) {
    max-width: 100%;
  }
`;

export const Footer = styled.div`
  h3 {
    font-size: 1rem;
    line-height: 1.3125rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 1.5625rem;
    color: #434343;
  }

  @media (min-width: 1441px) {
    // max-width: 400px;
    width: 83%;
    h3 {
      margin-bottom: 30px;
    }

    max-width: 300px;
    width: 60%;
  }

  @media (max-width: 1440px) {
    h3 {
      margin-bottom: 30px;
    }
    max-width: 300px;
    width: 95%;
  }

  @media (max-width: 1367px) {
    h3 {
      margin-bottom: 30px;
    }
    max-width: 300px;
    width: 95%;
  }

  @media (max-width: 928px) {
    max-width: 70%;
  }

  @media (max-width: 647px) {
    max-width: 80%;
  }

  @media (max-width: 490px) {
    max-width: 100%;

    p {
      font-size: 12px;
      line-height: 24px;
    }
  }
`;

export const ContainerButton = styled.div`
  margin-top: 30px;

  @media (min-width: 1441px) {
    width: 60%;
  }

  @media (max-width: 1440px) {
    width: 70%;
  }

  @media (max-width: 920px) {
    width: 70%;
  }

  @media (max-width: 490px) {
    width: 95%;
  }

  @media (max-width: 360px) {
    width: 100%;
  }
`;

export const Container = styled.div<VisibledProp>`
  // animacoes
  ${({ visibled }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    ${Content}, ${ContainerImg} {
      opacity: ${visibled ? 1 : 0};
    }
    ${visibled &&
    css`
      ${ContainerImg} {
        div[data-video] {
          animation: ${animationsObj.toLeftFromRight(-150)} 3s;
        }
      }

      ${Header} {
        animation: ${animationsObj.toLeftFromRight(650)} 2s;
      }

      ${Footer} {
        animation: ${animationsObj.toLeftFromRight(650)} 2s;
      }
    `}
  `}

  @media (max-width: 928px) {
    display: flex;
    flex-direction: column;
  }
`;
