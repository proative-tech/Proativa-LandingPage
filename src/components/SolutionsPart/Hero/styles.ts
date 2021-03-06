import styled, { css, keyframes } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

const animationH1 = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }

  to {
    opacity: translateY(0);
    opacity: 1;
  }
`;

export const ContainerTop = styled.div`
  display: grid;
  grid-template-columns: 54% 46%;

  @media (max-width: 1264px) {
    display: grid;
    grid-template-columns: 1fr 45%;
  }

  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;

    justify-content: flex-start;

    padding: 0 36px;

    width: 60%;
  }

  @media (max-width: 778px) {
    width: 70%;
  }

  @media (max-width: 662px) {
    width: 80%;
  }

  @media (max-width: 584px) {
    width: 90%;
  }

  @media (max-width: 516px) {
    width: 100%;
  }
`;

export const Content = styled.section`
  max-width: 600px;
  width: 100%;
  margin-left: auto;

  justify-self: flex-end;
  align-self: center;

  > div.content__text {
    margin-bottom: 3.125rem;

    h1 {
      font-size: 3rem;
      line-height: 3.5rem;
      font-family: 'Source Sans Pro';
    }

    h2 {
      font-size: 2rem;
      line-height: 3.2rem;
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

  &.cyber {
    max-width: 510px;

    > div.content__text {
      p {
        max-width: 80%; line-height: 1.8rem;
      }
    }
  }

  &.professionals {
    max-width: 500px;

    > div.content__text {
      p {
        max-width: 80%; line-height: 1.8rem;
      }
    }
  }

  &.rpa {
    max-width: 480px;

    > div.content__text {
      p {
        max-width: 90%;
      }
    }
  }

  &.consultancyID {
    max-width: 480px;
    padding-right: 50px;

    > div.content__text {
      p {
        max-width: 89%;
      }
    }
  }

  @media (min-width: 1441px) {
    max-width: 632px;

    margin-right: 0;

    p {
      font-size: 16px;
      line-height: 28px;
    }

    > div.content__text {
      h2 {
        font-size: 2.625rem;
        line-height: 3.875rem;
      }

      p {
        font-size: 20px;
        line-height: 2.1875rem;
      }
    }

    &.cyber {
      max-width: 613px;

      > div.content__text {
        p {
          max-width: 80%; line-height: 1.8rem;
        }
      }
    }

    &.professionals {
      max-width: 600px;

      > div.content__text {
        p {
          max-width: 90%;
        }
      }
    }

    &.rpa {
      max-width: 600px;

      > div.content__text {
        p {
          max-width: 90%;
        }
      }
    }

    &.consultancyID {
      max-width: 560px;

      > div.content__text {
        p {
          max-width: 89%;
        }
      }
    }
  }

  @media (max-width: 1440px) {
    margin-right: 100px;
  }

  @media (max-width: 1378px) {
    width: 80%;
  }

  @media (max-width: 920px) {
    width: 100%;
  }

  @media (max-width: 464px) {
    div.content__text {
      h1 {
        font-size: 26px;
        line-height: 34px;
      }

      h2 {
        font-size: 22px;
        line-height: 34px;
      }

      p {
        font-size: 14px;
        line-height: 24px;
      }
    }
  }
`;

type ContainerImgProps = {
  inverter: boolean;
};

export const ContainerImg = styled.section`
  position: relative;
  left: 0;

  justify-self: flex-end;

  width: 87%;

  @media (min-width: 1441px) {
    width: 100%;

    display: flex;
    justify-content: flex-end;

    margin-left: 50px;

    img {
      width: 95%;
    }
  }
`;

export const ContainerBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 50px;

  padding-bottom: 67px;
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    margin: 0 auto;

    position: relative;

    animation: ${animationFade} 0.5s;

    ${Content} {
      > div.content__text {
        h1 {
          animation: ${animationH1} 0.8s;
        }

        > p {
          animation: ${animationH1} 1.2s;
        }
      }

      div.info__text {
        animation: ${animationH1} 1.2s;
      }
    }

    ${ContainerImg} {
      img {
        animation: ${animationsObj.toXAnimation(50)} 1.2s;
      }
    }
  `}
`;
