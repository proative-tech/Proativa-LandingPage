import React from 'react';

import { Container } from './styles';

export function CardComments() {
  return (
    <Container>
      <div className="profile">
        <div className="img" />
        <br />
        <strong>Adriano Santos</strong>
        <p>Gestor executivo</p>
      </div>

      <div className="note">
        <p>
          <strong>"</strong>A entrega da ProAtiveestá além do monitoramento de dispositivos. Com a flexibilidade na construção de dashboards, possibilitou melhorias importantes e não somente uma visão para Capacity Planning de TI.”
        </p>

        <div className="profileMobile">
          <strong>Renato Barbosa</strong>
          <p>Coordenador de Infraestrutura</p>
        </div>

        <div className="empresa">
          <p>Tecnisa</p>
        </div>
      </div>
    </Container>
  );
}
