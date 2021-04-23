import styled from 'styled-components';

export const Container = styled.header`
  height: 67px;
  width: 100vw;
`;

export const Content = styled.div`
  max-width: 1140px;
  margin: 2.0rem 7.5rem;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
 

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
    font-size: 0.87rem;

    
    
  }
`;