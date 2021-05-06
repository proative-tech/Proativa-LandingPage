import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const Content = styled.div`
  max-width: 1085px;
  margin: 0 auto;

  padding: 4.8125rem 0 7.625rem;

  @media (max-width: 690px) {
    padding-top: calc(4.8125rem + 40px);
  }

  @media (max-width: 490px) {
    padding-bottom: 70px;
  }

  @media (max-width: 425px) {
    margin-top: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-bottom: 6.6875rem;

  div {
    span {
      font-size: 1.125rem;
      line-height: 1.1875rem;

      font-family: 'Source Sans Pro';

      color: #EB0029;
    }

    h1 {
      font-size: 3.125rem;
      line-height: 3.125rem;
      font-family: 'Source Sans Pro';

      font-weight: 300;
      color: #434343;

      margin-top: 1rem;

      strong {
        font-weight: 700;
      }
    }
  }


  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
    padding-left: 36px;
  }

  @media (max-width: 490px) {
    margin-bottom: 45px;

    div {
      span {
        font-size: 14px;
        font-weight: 400;
      }

      h1 {
        font-size: 30px;
        line-height: 30px;

        strong {
          font-weight: 700;
        }
      }
    }
  }
`;

export const ContainerInfos = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 7rem;

  > div.containerInfo {
    > div {
      height: 80px;
      width: 80px;

      display: flex;
      align-items: center;

      margin-bottom: 12px;
    }

    p.title {
      font-size: 0.9rem;
      line-height: 1.1875rem;
      color: #EB0029;
      font-weight: bold;
    }

    p:nth-child(3) {
      font-size: 0.8125rem;
      line-height: 1.4375rem;
      color: #666666;

      margin-top: 11px;
    }
  }

  @media (max-width: 1152px) {
    padding-left: 26px;
    padding-right: 26px;

    gap: 5rem;
  }

  @media (max-width: 947px) {
    gap: 3rem;
  }

  @media (max-width: 844px) {
    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding-left: 36px;
    padding-right: 36px;

    grid-template-columns: repeat(2, 1fr);
    column-gap: 10rem;
  }

  @media (max-width: 666px) {
    column-gap: 7rem;
  }

  @media (max-width: 574px) {
    column-gap: 4rem;
  }

  @media (max-width: 490px) {
    column-gap: 30px;
    padding-right: 24px;

    > div.containerInfo {
      p.title {
        font-size: 0.875rem;
      }

      p:nth-child(3) {
        font-size: 12px;
        line-height: 20px;
      }
    }
  }
`;

export const Divider = styled.hr`
      margin: 112px auto 0;
      width: 115px;
      height: 2px;
      background: #C4C4C4;
`;
