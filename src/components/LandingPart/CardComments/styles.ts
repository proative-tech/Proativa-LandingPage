import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 35% 65%;
  border: 1px solid #ededed;
  padding: 2rem 1rem 1rem 1.5rem;

  .profile {
    display: block;
    justify-content: center;
    align-items: center;
    margin-right: 3rem;
    margin-top: 2rem;

    grid-area: 'profile';

    div.empresa {
      display: flex;
      justify-content: center;

      margin-top: 8px;
      width: 100%;

      p {
        font-size: 0.85rem;
        font-weight: 600;
        color: red;
      }
    }

    strong {
      font-size: 1rem;
      font-weight: Normal;
      color: #000;
    }

    p {
      color: #c4c4c4;
      font-size: 0.75rem;
    }
  }

  .note {
    width: 100%;
    font-size: 0.93rem;
    color: #434343;
    height: 100%;

    grid-area: 'note';

    div.contentNote {
      display: flex;

      strong {
        font-size: 2rem;
        margin-right: 0.25rem;

        padding-top: 1px;
      }

      p {
        padding-top: 8px;
        font-size: 0.9rem;
        line-height: 24px;
      }
    }
  }

  div.infomationsClient {
    margin-left: 1rem;
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    strong {
      font-weight: 500;
      font-size: 1rem;
      color: #434343;
    }

    p {
      font-size: 0.75rem;
      color: #d3d3d3;
    }

    div.empresa {
      display: flex;

      margin-top: 1rem;
      width: 100%;

      p {
        font-size: 0.85rem;
        font-weight: 600;
        color: red;
      }
    }
  }

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;

    margin: 0;

    height: 310px;

    div.profile {
      display: none;
    }

    div.note {
      padding: 0;

      p {
        font-size: 14px;
        line-height: 27px;
      }

      div.profileMobile {
        display: flex;
        flex-direction: column;

        padding-left: 18px;

        margin-top: 12px;

        strong {
          font-size: 14px;
          font-weight: Normal;
          line-height: 19px;
          color: #000;
        }

        p {
          color: #c4c4c4;
          font-size: 0.75rem;
        }
      }

      div.empresa {
        justify-content: flex-start;

        margin-left: 18px;
      }
    }
  }
`;
