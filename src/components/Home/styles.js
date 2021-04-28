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
  
  .section-home {
    display: flex;
    align-items: center;
    justify-content: space-between;
    

    section {
      max-width: 500px;
    }

    section.section-ilustration {
      display: flex;

      max-width: 38.625rem;
      width: 100%;

      margin-left: 2rem;

      > img {
        flex: 1;
      }
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

    &:hover {
      background: none;
      color: var(--red);
    }  
  }

  .second-btn {
    border: 2px solid #707070;
    background: none;
    transition: 0.2s;

    &:hover {
      border: 2px solid var(--background);
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

  @media (max-width:1360px) {
    .section-home {
      img {
        width: 500px;
      }
    }
  }

  @media (max-width: 1050px) {
    .section-home {
      gap: 0 3rem;
    }
  }

  @media (max-width:980px) {
    .section-home {
      gap: 0 0;
      margin: 0 auto;
      padding: 0 auto;

      .section-ilustration {
        img {
          margin-top: -3rem;
        }
      }
    }

  }

  @media (max-width:520px) {
    margin: 0 auto;
    padding: 0 2rem;

    .section-home {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));   
      h1 {
        font-size: 26px;
      }

      button {
        margin: 0rem 1rem 1rem 0;
        width: 193px;
        font-size: 12px;
        padding: 0.75rem 1.375rem;
      }

      .section-ilustration {
        img {
          width:100%;
          margin-top: -3rem;
        }
      }


      span {
        display: none;
      }       
    }

    .section-next {
        display: none; 
    }

   
  }

  @media (min-width:300px) and (max-width:460px) {
    .section-home {
      .section-ilustration {
        img {
          margin-top: -3rem;
        }
      }
    }
  }

  




`;