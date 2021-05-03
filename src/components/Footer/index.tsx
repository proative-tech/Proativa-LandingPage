import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container, Content, ContentMain } from './styles';

export const Footer = () => {
  const isMobileOrTablet = useMediaQuery({ maxWidth: 940 });

  return (
    <Container>
      <ContentMain isMobileOrTablet={isMobileOrTablet}>
        <div>
          <h1>
            Cuidando e impulsionando a sua operação <strong>Anywhere.</strong>
          </h1>
        </div>
      </ContentMain>
      <Content>
        <div>
          <section className="footer">
            <div>
              <img src="/images/logo.svg" alt="" />
            </div>

            <div className="contentRight">
              <div>
                <p>Alameda Araguaia, 2104 – 7º andar</p>
                <p>Conj. 71A</p>
                <p>Alphaville | Barueri</p>
                <p>São Paulo, Brasil</p>
                <p>06455-000</p>
              </div>

              <div className="contact">
                <div>
                  <p>+55 11 4130-8800</p>
                  <p>contato@proativetec.com.br</p>
                </div>
                <div>
                  <a href="/">Youtube</a>
                  <a href="/" />
                  <a href="/">linkedln</a>
                </div>
              </div>
            </div>
          </section>

          <hr />
          <div className="text-footer">
            <p>
              © 2021Proative Technology{' '}
              <span>– Todos os direitos reservados</span>
            </p>
          </div>
        </div>
      </Content>
    </Container>
  );
};
