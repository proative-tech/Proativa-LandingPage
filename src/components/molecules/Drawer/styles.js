import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    position: fixed;
    left: 0;
    top: 0;

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
    content: "";
    height: 100%;

    background: #000;

    position: relative;

    opacity: 0.23;
`;

export const Content = styled.div`
    height: 100vh;

    top: 0;
    right: 0;

    background: #F4F4F4;

    display: flex;
    flex-direction: column;
    padding: 32px 24px;

    > ul {
        list-style: none;

        width: 100%;

        display: flex;
        flex-direction: column;
        
        justify-content: center;

        padding-left: 20%;

        li + li {
            margin-top: 21px;
        }
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
    }
`;

export const Item = styled.li`
    width: 100%;

    a {
        text-decoration: none;

        font-size: 1.125rem;
        line-height: 1.5625rem;
        font-weight: normal;

        color: #000;
    }
`;