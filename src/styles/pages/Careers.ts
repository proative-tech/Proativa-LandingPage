import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
`;

export const ContainerInfos = styled.div`
  margin-top: 138px;

  > div + div {
    margin-top: 75px;
  }

  @media (max-width: 920px) {
    margin-top: 0;

    > div + div {
      margin-top: 40px;
    }
  }
`;
