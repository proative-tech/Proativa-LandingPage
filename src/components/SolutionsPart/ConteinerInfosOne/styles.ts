import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;

  background: #fff;

  padding: 100px 0 80px;

  @media (max-width: 578px) {
    padding: 29px;
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 7rem;

  width: 55.2%;

  margin: 0 auto;

  @media (max-width: 1366px) {
    gap: 4rem;
  }

  @media (max-width: 1233px) {
    width: 70%;
  }

  @media (max-width: 921px) {
    width: 90%;
  }

  @media (max-width: 578px) {
    display: flex;
    flex-direction: column;

    width: 35%;
  }

  @media (max-width: 490px) {
    width: 55%;
  }
`;

export const Info = styled.div`
  > div {
    height: 80px;
    width: 80px;

    display: flex;
    align-items: center;

    margin-bottom: 12px;
  }

  p.title {
    font-size: 1rem;
    line-height: 1.1875rem;
    color: #eb0029;
    font-weight: bold;
  }

  p:nth-child(3) {
    font-size: 0.8125rem;
    line-height: 1.4375rem;
    color: #666666;

    margin-top: 11px;
  }
`;
