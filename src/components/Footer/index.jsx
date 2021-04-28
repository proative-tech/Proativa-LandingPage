import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Content, ContentMain } from './styles';

export const Footer = () => {
    return (
        <Container>
            <ContentMain>
                <h1>
                    Cuidando e impulsionando a sua operação <strong>Anywhere.</strong>
                </h1>
            </ContentMain>
            <Content>
                <section className="footer">
                    <div>
                        <img src={ logo } alt=""/>
                    </div>
        
                    <div>
                        <p>Alameda Araguaia, 2104 – 7º andar</p>
                        <p>Conj. 71A</p>
                        <p>Alphaville | Barueri</p>
                        <p>São Paulo, Brasil</p>
                        <p>06455-000</p>
                    </div>
        
                    <div className="contact">
                        <p>+55 11 4130-8800</p>
                        <p>contato@proativetec.com.br</p>
            
                        <span>
                            <a href="/">Facebook</a>
                            <a href="/"></a>
                            <a href="/">linkedln</a>
                        </span>
            
                        <p >Olíticas de Privacidade</p>
                    </div>
            
                
                </section>
        
                <hr/>
                <div className="text-footer">
                    <p>
                        © 2021Proative Technology – Todos os direitos reservados
                    </p>
                </div>
            </Content>
        </Container>
    )
}