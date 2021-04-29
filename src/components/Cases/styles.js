import styled from 'styled-components';


export const Container = styled.div`
  width: 100%;
  background: #FFF;

`;

export const Content = styled.div`
   max-width: 1146px;
    margin: 0 auto; 
  

  .section-main {
    padding: 7rem 0 3rem 0;
    width: 100%;
    text-align: center;

    h3 {
      font-size: 2rem;
      font-weight: bold;
    }

    p {
      font-size: 0.93rem;
      color: var(--text);
    }
  }

  .section-item {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    justify-content: center;

    div {
      text-align: center;
  
      h1 {
        font-size: 4.5rem ;
        font-weight: 600;
      }

      p {
        font-size: 0.81rem;
        color: var(--red);
        text-transform: uppercase;
      }
    }
  }

  .section-line {
    padding: 7rem 0;
    width: 100%;
    display: flex;
    justify-content: center;

    hr {
      width: 115px;
      height: 2px;
      background: #C4C4C4;
    }
  }

  .section-client {
    width: 100%;
    text-align: center;
    padding: 0 0 4rem 0;
    
    h3 {
      font-size: 2rem;
    }

    p {
      color: var(--text);
    }
  }

  .section-comentario {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));

    gap: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 0 2rem;

    .section-main {
      padding-top: 62px;
      padding-bottom: 1.5rem;
    }

    .section-item {
      display: flex;
      flex-direction: column;

      div + div {
        margin-top: 1.5rem;
      }
    }

    .section-line {
      padding: 44px 0 49px;
    }
  }

  @media (max-width: 490px) {
    section.section-main, .section-client {
      h3 {
        font-size: 28px;
        line-height: 38px;
      }

      p {
        font-size: 14px;
        line-height: 28px;
        font-family: 'Open Sans'
      }
    }

    section.section-item {
      div.iten {
        h1 {
          font-size: 60px;
          line-height: 80px;
        }
      }
    }

    section.section-comentario {
      display: flex;
      flex-direction: column;
    }
  } 
`;