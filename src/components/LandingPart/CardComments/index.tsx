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
        <div className="contentNote">
          <strong>"</strong>
          <p>{comment}</p>
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
