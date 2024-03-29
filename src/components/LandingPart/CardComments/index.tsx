import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container } from './styles';

type CardCommentsProps = {
  comment: string;
  clientCompany: string;
  nameClient: string;
  areaClient: string;
  src: string;
  // eslint-disable-next-line react/require-default-props
  styles?: string;
};

export function CardComments({
  comment,
  clientCompany,
  nameClient,
  areaClient,
  src,
  styles,
}: CardCommentsProps) {
  const isMobile = useMediaQuery({ maxWidth: 490 });

  return (
    <Container>
      <div className="profile">
        <div className="image">
          <img src={src} alt={clientCompany} />
        </div>
        <br />

        <div className="empresa">
          <p>{clientCompany}</p>
        </div>
      </div>

      <div className="note">
        <div className="contentNote">
          <strong>"</strong>
          <p className={styles}>{comment}"</p>
        </div>
      </div>
      <div />
      <div className="infomationsClient">
        <strong>{nameClient}</strong>
        <strong>{areaClient}</strong>
        {isMobile && (
          <div className="empresa">
            <p>{clientCompany}</p>
          </div>
        )}
      </div>
    </Container>
  );
}
