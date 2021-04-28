import React from 'react';

import { Container } from './styles';

export function CardComments() {
    return (
        <Container>
            <div className="profile">
                <div className="img"></div><br/>
                <strong>Adriano Santos</strong>
                <p>Gestor executivo</p>
            </div>

            <div className="note">
                <p>
                <strong>"</strong>O que mais nos chamou a atenção foi a transparência e a confiança da empresa.
                Criamos uma relação de comprometimento, ética profissional e com total 
                prioridade no nosso atendimento. Foi isso que mais nos encantou.”
                </p>

                <div className="empresa">
                    <p>
                        Unimed Salto - Itu
                    </p>
                </div>
            </div>
        </Container>
    )
}