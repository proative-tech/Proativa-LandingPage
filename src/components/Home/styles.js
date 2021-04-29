import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  background: var(--background);

`;

export const Content = styled.div`
   max-width: 1146px;
   margin: 0 auto; 

  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem 0;

  padding: 3.25rem 0 0 2rem;
  
  div.section-home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    > section.contentLeft {
      min-width: 506px;
    }

    section.section-ilustration {
      display: flex;

      max-width: 38.625rem;
      width: 100%;

      margin-left: 2rem;

        
    }
  }
  
  .section-next {
    max-width: 1440px;
    display: flex;
    justify-content: center;

    img {
      cursor: pointer;  
    }
  }
  h1 {
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 3rem;
    font-weight: bold;
    padding: 2rem 0 0 0;
  }

  p {
    padding: 13px 0 50px 0;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    line-height: 28px;
    color: var(--text);
    line-height: 1.7;
  }

  button { 
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1rem;
    font-weight: bold;
    padding: 0.75rem 2.375rem;
    outline: none;
    margin: 0 1rem 1.5rem 0;
  }

  .primary-btn {
    background: var(--red);
    color: #fff;
    border: 2px solid var(--red);

    transition: all 0.2s;

    &:hover {
      background: none;
      color: var(--red);
    }  
  }

  .second-btn {
    border: 2px solid #707070;
    background: #f4f4f4;
    
    transition: all 0.2s;

    &:hover {
      background: #707070;
      color: var(--background);
    }
  }

  span {
    a {
      font-size: 1rem;
      text-decoration: none;
      color: var(--black);
      font-weight: bold;
    }

    &:last-child {
      margin-left: 1.5rem;
      padding-left: 1.5rem;
      position: relative;

      &::before {
      content: "";
      width: 6px;
      height: 6px;
      border-radius: 3px;
      background: #c4c4c4;
      position: absolute;
      right: 0;
      top: 50%;
      left: -0.2rem;
      }
    }  
  }

  .section-next {
    padding: 1.7rem 0;
  }

  .iconArrow {
    justify-content: center;
    
  }

  @media (max-width: 1340px) {
    
    section.section-ilustration {
      max-width: 100%;
  
      img {
        width: 100%;
      }
    }
  }


  @media (max-width: 1270px) {
  
    section.section-ilustration {
      padding-right: 2rem;
    }
  }
  
  @media (max-width:980px) {
    padding: 3.25rem 1rem 0;

    div.section-home {
      flex-direction: column;

      div.containerMediaSociais {
        display: none;
      }

      section.section-ilustration {
        margin-left: 0px;
        padding-right: 0px;
      }
    }
  }

  @media (max-width: 768px) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;

    div.section-home {
      display: flex;
      align-items: flex-start;

      section.contentLeft {
        min-width: 0px;
        width: 90%;

        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        button {
          width: 80%;
        }
      }

      section.section-ilustration {        
        height: 100%;
      }
    }

    div.section-next {
      display: none;
    }
  }

  @media (max-width:490px) {
    padding-left: 0px;
    padding-right: 0px;

    div.section-home {
      position: relative;

      height: 590px;

      > section.contentLeft {
        padding-left: 2.25rem;
        padding-right: 2.25rem;

        h1 {
          font-size: 29px;
          line-height: 34px;
        }

        p {
          line-height: 24px;
        }

        button {
          z-index: 30;
        }
      }

      .section-ilustration {
        position: absolute;
        bottom: -15rem;

        width: 100%;
        left: -15px;
        
        overflow: auto;

        img {
        
          width: 130%;
        }
      }
    } 
  }

  @media (max-width: 425px) {
    div.section-home {

      > section.contentLeft {
        width: 90%;

        h1 {
          font-size: 26px;
          line-height: 34px;
        }

        p {
          font-size: 12px;
          line-height: 24px;

          width: 80%;

          text-align: left;
        }

        button {
          font-size: 12px;
        }
      }

      .section-ilustration {
        position: absolute;
        bottom: -15rem;
        
        width: 100%;
        left: -5px;
        
        overflow: hidden;

        img {
          width: 110%;
        }
      }
    }
  }
`;