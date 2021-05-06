import { useState, useCallback, useRef } from 'react';
import CookieConsent, { CookieConsentProps } from 'react-cookie-consent';
import Link from 'next/link';
import { Container, Content, ContainerButtons } from './styles';
import { ConfigCookies } from './Modal';

export const CookiesAlert = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const cookieConsentRef = useRef<CookieConsentProps>();

  const onRequestClose = useCallback(() => {
    setIsModalShow(!isModalShow);
  }, [isModalShow]);

  return (
    <>
      <Container>
        <CookieConsent
          location="bottom"
          buttonText="Aceito"
          cookieName="cookieTesteProative"
          buttonId="buttonAcee"
          style={{
            background: '#fff',
            boxShadow: '0px -2px 10px #00000029',
            display: 'flex',
            alignItems: 'center',
            padding: '29px',
          }}
          ButtonComponent={() => (
            <ContainerButtons>
              <button type="button" id="buttonAcee">
                Aceito
              </button>
              <button type="button" onClick={onRequestClose}>
                Configurar Cookies
              </button>
            </ContainerButtons>
          )}
          buttonStyle={{
            color: '',
            background: '#fff',
            border: '1px solid #595959',
            padding: '7px 28px',
          }}
          expires={150}

          // onDecline={onRequestClose}
        >
          <Content>
            <h3>Nós utilizamos cookies</h3>
            <p>
              Nosso site utiliza cookies para melhorar sua experiência. Ao
              navegar pela página, você aceita tais condições.
              <br /> Para mais informações, acesse nossa{' '}
              <Link href="/politicas-de-privacidade" passHref>
                <a>Política de Privacidade.</a>
              </Link>
            </p>
          </Content>
        </CookieConsent>
      </Container>

      <ConfigCookies isOpen={isModalShow} onRequestClose={onRequestClose} />
    </>
  );
};
