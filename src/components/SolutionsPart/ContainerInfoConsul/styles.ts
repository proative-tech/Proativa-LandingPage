import styled, { css } from 'styled-components';
import { animationFade, animationsObj } from '../../../utils/animations';
import { VisibledProp } from '../../LandingPart/Informations/styles';

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 1058px;
  width: 100%;
  margin: 0 auto;

  @media (min-width: 581px) {
    padding-left: 26px;
    padding-right: 26px;
  }
`;

export const Info = styled.div`
  max-width: 285px;
  width: 100%;

  display: flex;
  align-items: flex-start;

  > h3 {
    font-size: 3.125rem;
    line-height: 4.375rem;
    font-weight: 300;

    color: #141414;
  }

  > p {
    margin-left: 8px;
    padding-top: 12px;

    font-size: 1rem;
    line-height: 1.8375rem;
    color: #434343;
  }
`;

export const ContentTop = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 90px;

  h2 {
    font-size: 20px;
    font-family: 'Source Sans Pro';
    color: #2c2c2c;

    margin-bottom: 65px;
  }

  > div {
    ${Info} + ${Info} {
      margin-left: 3rem;
    }
  }

  div.row + div.row {
    margin-top: 65px;
  }

  div.row:nth-child(2) {
    display: flex;
    justify-content: space-between;
  }

  div.row:nth-child(3) {
    display: flex;
    justify-content: center;

    ${Info}:nth-child(1) {
      max-width: 355px;
    }

    ${Info}:nth-child(2) {
      max-width: 355px;
    }
  }

  @media (max-width: 580px) {
    margin-bottom: 50px;

    > h2 {
      margin-bottom: 30px;
    }

    > div {
      ${Info} + ${Info} {
        margin-left: 0;

        margin-top: 16px;
      }
    }

    div.row + div.row {
      margin-top: 0;
    }

    div.row:nth-child(2) {
      flex-direction: column;
      justify-content: flex-start;
    }
    div.row:nth-child(3) {
      flex-direction: column;
      justify-content: flex-start;
    }
  }
`;

export const ContentBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  > div.contentBottomMain {
    max-width: 375px;
    width: 100%;

    h3 {
      font-size: 20px;
      color: #eb0029;
      font-family: 'Source Sans Pro';

      margin-bottom: 21px;
    }

    p {
      font-size: 14px;
      line-height: 1.8375rem;
    }
  }

  > div.contentBottomImg {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img + img {
      margin-top: 14px;
    }

    img:nth-child(2) {
      margin-left: 24px;
    }
  }

  @media (max-width: 832px) {
    flex-direction: column;
    align-items: flex-start;

    div.contentBottomMain {
      margin-bottom: 30px;
    }

    div.contentBottomImg {
      margin-left: -30px;
    }
  }

  @media (max-width: 580px) {
    div.contentBottomImg {
      display: none;
    }
  }
`;

export const Container = styled.div<VisibledProp>`
  ${({ visibled }) => css`
    width: 100vw;

    background: #fff;

    padding: 100px 0 80px;

    @media (max-width: 578px) {
      padding: 29px;     padding-top: 0px;
    }

    //animations

    ${Info} {
      opacity: ${visibled ? 1 : 0};
    }

    ${visibled &&
    css`
      ${ContentTop} {
        > h2 {
          animation: ${animationsObj.toXAnimation(-50)} 1.2s;
        }

        div.row:nth-child(2) {
          > ${Info}:nth-child(1) {
            animation: ${animationsObj.toYAnimation(50)} 1.2s;
          }
          > ${Info}:nth-child(2) {
            animation: ${animationsObj.toYAnimation(70)} 1.2s;
          }
          > ${Info}:nth-child(3) {
            animation: ${animationsObj.toYAnimation(90)} 1.2s;
          }
        }

        div.row:nth-child(3) {
          > ${Info}:nth-child(1) {
            animation: ${animationsObj.toYAnimation(50)} 1.2s;
          }
          > ${Info}:nth-child(2) {
            animation: ${animationsObj.toYAnimation(70)} 1.2s;
          }
        }
      }

      ${ContentBottom} {
        div.contentBottomMain {
          animation: ${animationsObj.toYAnimation(70)} 1.2s;
        }

        div.contentBottomImg {
          transition: opacity 1s ease;
          opacity: ${visibled ? 1 : 0};
        }
      }
    `}
  `}
`;
