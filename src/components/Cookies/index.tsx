import CookieConsent, { Cookies } from 'react-cookie-consent';
import { Container, Content } from './styles';

export const CookiesAlert = () => {
  return (
    <Container>
      <CookieConsent
        location="bottom"
        buttonText="Aceito"
        cookieName="cookieTesteProative"
        style={{
          background: '#fff',
          boxShadow: '0px -2px 10px #00000029',
          display: 'flex',
          alignItems: 'center',
          padding: '29px',
        }}
        buttonStyle={{
          color: '',
          background: '#fff',
          border: '1px solid #595959',
          padding: '7px 28px',
        }}
        expires={150}
        enableDeclineButton
        flipButtons
        declineButtonText="Saber Mais"
        declineButtonStyle={{
          color: '',
          background: '#fff',
          border: '1px solid #595959',
          padding: '7px 42px',
        }}
      >
        <Content>
          <h3>Nós utilizamos cookies</h3>
          <p>
            Nosso site utiliza cookies para melhorar sua experiência. Ao navegar
            pela página, você aceita tais condições.
            <br /> Para mais informações, acesse nossa Política de Privacidade.
          </p>
        </Content>
      </CookieConsent>
    </Container>
  );
};
