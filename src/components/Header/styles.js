import styled from 'styled-components';

export const Container = styled.div`
  min-width: 100vw;
  background: var(--background);
`;

export const Content = styled.div`
  max-width: 1146px;
  margin: 0 auto; 

  padding: 2.6875rem 0 0; 
  
  display: flex;
  justify-content: space-between;
  align-items: center;

  > a {
   img {
      width: 168px;
      height: 67px;
    } 
  }

 
 

  ul {
    list-style: none;
  }

  ul li {
    display: inline-block;
    padding: 13.5px 26px;

    .cool-link::after {
      content: '';
      display: block;
      width: 100%;
      height: 0.12rem;
      background: #ADABAC;
      transform: scale(0, 1);
      transform-origin: 0% 100%;
      transition: transform 0.3s ease;
    }    

    .cool-link:hover::after {
      transform: scale(1, 1);
     
    }
  }

  ul li a {
    text-decoration: none;
    text-transform: uppercase;
    color: var(--black);
    font-weight: 400;
    font-size: 0.875rem;
 
  }

  @media (max-width:1130px) {
    ul {
      display: none;
    }
  }

  @media (max-width:520px) {
    margin: 0 auto;
  }
`;