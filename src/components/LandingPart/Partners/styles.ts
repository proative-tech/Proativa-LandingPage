import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #f4f4f4;
  width: 100%;
`;

export const Content = styled.div`
  max-width: 1146px;
  margin: 0 auto;

  padding: 32px 32px 90px;

  margin-bottom: 82px;

  @media (max-width: 845px) {
    padding: 32px 32px 42px;
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
`;

export const ContainerBottomCarousel = styled.div`
  margin-top: 27px;

  display: flex;
  align-items: center;
  justify-content: center;

  button {
    background: #ffffff;
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

export const Header = styled.div`
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 2rem;
    line-height: 2.375rem;
    color: #000;
    font-family: 'Source Sans Pro';
  }

  h4 {
    font-size: 1rem;
    line-height: 1.75rem;
    color: #434343;
    font-weight: 400;
  }
  @media (max-width: 845px) {
    margin-bottom: 1.5rem;
  }
`;

export const ContainerImg = styled.div`
  @media (max-width: 845px) {
    width: 100%;
    height: 120px;

    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerPartners = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
