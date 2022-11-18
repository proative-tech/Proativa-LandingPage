import styled from 'styled-components';

export const ContainerButtonCustom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonCustom = styled.button`
  background: #f4f4f4;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerCarousel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .containerDEP {
    width: 90vw;
    padding: 0 24px;

    button.rec-arrow {
      background: #c4c4c4;
    }

    div.rec-pagination {
      margin-top: 3rem;

      button.rec-dot {
        background: black;
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
    background: #f4f4f4;
    border-radius: 50%;

    margin: 0 17px;
  }
`;

export const ContainerClients = styled.div`
  max-width: 1230px;
  margin: 0 auto;

  padding: 100px 50px;

  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;
