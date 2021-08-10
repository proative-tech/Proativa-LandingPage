import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: #fff;
`;

export const Content = styled.div`
  .section-main {
    padding: 7rem 0 3rem 0;
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
        font-weight: 600;
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
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    .section-main {
      padding-top: 62px;
      padding-bottom: 1.5rem;
    }

    .section-item {
      display: flex;
      flex-direction: column;

      div + div {
        margin-top: 1.5rem;
      }
    }

    .section-line {
      padding: 44px 0 49px;
    }
  }

  @media (max-width: 490px) {
    section.section-main,
    .section-client {
      h3 {
        font-size: 28px;
        line-height: 38px;
      }

      p {
        font-size: 14px;
        line-height: 28px;
        font-family: 'Open Sans';
      }
    }

    section.section-item {
      div.iten {
        h1 {
          font-size: 60px;
          line-height: 80px;
        }
      }
    }

    section.section-comentario {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const ContainerCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .containerREC {
    button.rec-arrow {
      display: none;
    }

    div.rec-pagination {
      margin-top: 3rem;

      button.rec-dot {
        background: #c4c4c4;
        border: none;
        box-shadow: none;

        width: 6px;
        height: 6px;
      }

      button.rec-dot_active {
        background: #eb0029;
      }
    }
  }

  @media (max-width: 490px) {
    div.rec-slider-container {
      div.rec-swipable {
        .rec-carousel-item {
          .rec {
            padding: 0 !important;
          }
        }
      }
    }
  }
`;

export const ContainerBottomCarousel = styled.div`
  margin-top: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: #f4f4f4;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  div {
    content: '';
    width: 6px;
    height: 6px;
    background: #c4c4c4;
    border-radius: 50%;

    margin: 0 17px;
  }
`;

export const ContainerClients = styled.div`
  max-width: 1146px;
  margin: 0 auto;

  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;

export const ContainerTop = styled.div`
  max-width: 1146px;
  margin: 0 auto;

  padding: 0 32px;

  @media (max-width: 768px) {
    padding: 0 2rem;
  }
`;
