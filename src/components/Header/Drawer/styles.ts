import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: 100%;

  display: flex;

  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  height: 100vh;

  z-index: 50;

  > div:nth-child(1) {
    width: 60%;
  }

  > div:nth-child(2) {
    width: 40%;
  }

  @media (max-width: 768px) {
    > div:nth-child(1) {
      width: 50%;
    }

    > div:nth-child(2) {
      width: 50%;
    }
  }

  @media (max-width: 665px) {
    > div:nth-child(1) {
      width: 40%;
    }

    > div:nth-child(2) {
      width: 60%;
    }
  }

  @media (max-width: 552px) {
    > div:nth-child(1) {
      width: 30%;
    }

    > div:nth-child(2) {
      width: 70%;
    }
  }

  @media (max-width: 490px) {
    > div:nth-child(1) {
      width: 20%;
    }

    > div:nth-child(2) {
      width: 80%;
    }
  }
`;

export const Overlay = styled.div`
  content: '';
  height: 100%;

  background: #000;

  position: relative;

  opacity: 0.23;
`;

export const Content = styled.div`
  height: 100%;

  top: 0;
  right: 0;

  background: #f4f4f4;

  display: flex;
  flex-direction: column;
  padding: 32px 0;

  overflow: auto;

  > ul {
    list-style: none;

    width: 100%;

    display: flex;
    flex-direction: column;

    justify-content: center;
  }
`;

export const ButtonClose = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;

  margin-bottom: 50px;

  button {
    border: none;
    background: transparent;
    margin-right: 34px;
  }
`;

type ItemProps = {
  modifiersDropdown?: boolean;
};

export const Item = styled.li<ItemProps | any>`
  ${({ modifiersDropdown, actived }) => css`
    width: 100%;
    padding-left: 20%;

    height: 50px;
    line-height: 50px;

    position: relative;

    a {
      text-decoration: none;
      display: inline-block;
      width: 100%;

      font-size: 1.125rem;
      line-height: 1.5625rem;
      font-weight: normal;

      color: #000;
    }

    span {
      width: 100%;
    }

    &:hover {
      background: #fff;
    }

    ${modifiersDropdown &&
    css`
      max-height: 50px;
      width: 100%

      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
      background-color: transparent;
    `}
    ${!actived &&
    css`
      background-color: transparent;
    `}

    ${actived &&
    css`
      max-height: 500px;
      height: 100%;
      background: #fff;
    `}
  `}
`;

export const ContainerLinks = styled.div<any>`
  ${({ actived }) => css`
    display: ${actived ? 'block' : 'none'};
    padding-left: 1rem;
  `}
`;
