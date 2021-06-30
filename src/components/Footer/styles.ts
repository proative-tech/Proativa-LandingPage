import styled from 'styled-components';

export const Content = styled.div`
  background: #f4f4f4;

  > div {
    max-width: 1085px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  .section-main {
    padding: 132px 0 0 0;
    width: 100%;
    text-align: center;

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      font-size: 0.93rem;
      color: var(--text);
    }
  }

  .section-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;

    div {
      text-align: center;

      h1 {
        font-size: 4.5rem;
      }

      p {
        font-size: 0.81rem;
        color: var(--red);
        text-transform: uppercase;
      }
    }
  }

  .section-line {
    padding: 7rem 0;
    width: 100%;
    display: flex;
    justify-content: center;

    hr {
      width: 115px;
      height: 2px;
      background: #c4c4c4;
    }
  }

  .section-client {
    width: 100%;
    text-align: center;
    padding: 0 0 4rem 0;

    h3 {
      font-size: 2rem;
    }

    p {
      color: var(--text);
    }
  }

  .section-comentario {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    gap: 1.5rem;
  }
`;

export const Container = styled.div`
  width: 100vw;
  height: 100%;

  position: relative;

  svg {
    position: absolute;
    top: 0;

    fill: #fff;

    width: 100%;

    z-index: 20;

    margin: 0 auto;
  }

  hr {
    background: #e5e3df;
    margin: 2rem 0 0 0;
    height: 1px;
    border: none;
  }

  div.text-footer {
    padding-bottom: 4rem;

    p {
      color: #c4c4c4;
    }
  }

  .footer {
    width: 100%;

    display: flex;
    align-items: flex-start;

    padding-left: 1rem;
    padding-right: 2rem;

    img {
      width: 168px;
      height: 67px;
    }

    > div + div {
      margin-left: 56px;
    }

    > div:nth-child(2) {
      display: flex;

      div + div {
        margin-left: 56px;
      }
    }

    div:nth-child(2) {
      p {
        font-size: 1rem;
        line-height: 1.75rem;
      }
    }

    .contact {
      display: flex;
      flex-direction: column;

      p {
        color: #434343;
        font-size: 0.87rem;
        padding-bottom: 0.5rem;
        font-weight: normal;
      }

      div:nth-child(2) {
        display: flex;
        width: 100%;
        justify-content: flex-start;

        margin-left: 0;
        margin-bottom: 10px;
      }

      div:nth-child(2) a {
        text-decoration: none;
        color: var(--black);
        font-size: 1rem;
      }

      div:nth-child(2) a:first-child {
        padding: 0 1rem 0 0;
      }

      div:nth-child(2) a:nth-child(2)::after {
        margin: 10px 12px 0 0;
        content: '';
        width: 6px;
        height: 6px;
        border-radius: 3px;
        left: 0.3rem;
        background: #434343;
        display: block;
      }
    }
  }

  @media (max-width: 864px) {
    .footer {
      padding-left: 0;

      justify-content: flex-start;

      img {
        margin-left: -20px;
      }
    }
  }

  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      width: 100%;

      > div + div {
        margin-left: 0;
      }

      > div:nth-child(2) {
        display: flex;

        margin-top: 26px;

        div + div {
          margin-left: 40px;
        }
      }
    }
  }

  @media (max-width: 490px) {
    .footer {
      padding-right: 0px;
    }

    div.contentRight {
      div {
        p {
          font-size: 10px;
          line-height: 16px;
        }
      }
    }

    div.contact {
      div:nth-child(2) {
        order: -1;

        flex-direction: column;

        a + a {
          margin-top: 10px;
        }
      }

      div:nth-child(2) a:nth-child(2) {
        display: none;
      }
    }

    div.text-footer {
      span {
        display: none;
      }
    }
  }

  @media (max-width: 425px) {
    .footer {
      > div:nth-child(2) {
        div + div {
          margin-left: 20px;
        }
      }
    }
  }
`;

interface ContentMainProps {
  isMobileOrTablet: boolean;
}

export const ContentMain = styled.div<ContentMainProps>`
  width: 100vw;
  margin: 56px auto 0;

  display: flex;
  align-items: center;

  height: 278px;

  background: ${props =>
    props.isMobileOrTablet
      ? "url('/images/bg_ondulacaoMobile.svg')"
      : "url('/images/bg_ondulacao1.svg')"};

  background-size: cover;

  > div {
    max-width: 1085px;
    margin: 0 auto;
    padding: 0 2rem;
  }

  h1 {
    font-size: 3rem;
    line-height: 3.125rem;

    max-width: 60%;

    font-weight: normal;
    font-family: 'Source Sans Pro';

    strong {
      font-weight: bold;
    }
  }

  @media (max-width: 490px) {
    h1 {
      font-size: 28px;
      line-height: 35px;
    }
  }
`;
