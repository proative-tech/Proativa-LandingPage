import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from './styles';

type CardCommentsProps = {
  comment: string;
  clientCompany: string;
  nameClient: string;
  areaClient: string;
  src: string;
};

export function CardComments({
  comment,
  clientCompany,
  nameClient,
  areaClient,
  src,
}: CardCommentsProps) {
  const isMobile = useMediaQuery({ maxWidth: 490 });

  return (
    <Container>
      <div className="profile">
        <img src={src} alt={clientCompany} />
        <br />
        <div className="empresa">
          <p>{clientCompany}</p>
        </div>
      </div>

      <div className="note">
<<<<<<< HEAD
        <div className="contentNote">
          <strong>"</strong>
          <p>{comment}</p>
=======
        <p>
          <strong>"</strong>A entrega da ProAtiveestá além do monitoramento de dispositivos. Com a flexibilidade na construção de dashboards, possibilitou melhorias importantes e não somente uma visão para Capacity Planning de TI.”
        </p>

        <div className="profileMobile">
          <strong>Renato Barbosa</strong>
          <p>Coordenador de Infraestrutura</p>
        </div>

        <div className="empresa">
          <p>Tecnisa</p>
>>>>>>> 19153985b632347ec57923e406fe6ebdca4874df
        </div>
      </div>
      <div />
      <div className="infomationsClient">
        <strong>{nameClient}</strong>
        <p>{areaClient}</p>
        {isMobile && (
          <div className="empresa">
            <p>{clientCompany}</p>
          </div>
        )}
      </div>
    </Container>
  );
}
