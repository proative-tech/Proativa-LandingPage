import styled from 'styled-components';

export const Container = styled.div`
      display: flex;
      border: 1px solid #EDEDED;
      padding: 2rem 2rem;

      .profile {
        
        display: block;
        justify-content: center;
        width: 100%;

        .img {
          width: 100px;
          height: 100px;
          background: #EDEDED;
        }

        strong {
          font-size: 1rem;
          font-weight: Normal;
          color: #000;
        }

        p {
          color: #C4C4C4;
          font-size: 0.75rem;
        }
      }

      .note {
        width: 100%;
        font-size: 0.93rem;
        color: #434343;

        p {
          display: flex;
          strong {
            font-size: 2rem;
            margin-right: 0.25rem;

            padding-top: 1px;
          }
        }


        div.empresa {
          display: flex;
          justify-content: flex-end;
          margin-top: 8px;
          width: 100%;

          p {
            font-weight: 600;
            color: red;
          }
        }
      }
`;