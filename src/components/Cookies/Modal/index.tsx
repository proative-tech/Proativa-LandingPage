import { useEffect, useState, useCallback, useContext } from 'react';
import Modal from 'react-modal';

import { Container } from './styles';
import { Toogle } from './Toggle';

interface ConfigCookiesProps {
  isOpen: boolean;
  onRequestClose: () => void;
  AcceptAllCookies: () => void;
  AcceptMandatoriesCookies: () => void;
}

Modal.setAppElement('#__next');

export const ConfigCookies = ({
  isOpen,
  onRequestClose,
  AcceptMandatoriesCookies,
  AcceptAllCookies,
}: ConfigCookiesProps) => {
  const [mandatoryCookies, setMandatoryCookies] = useState(true);
  const [thirdPartyCookies, setchirdPartyCookies] = useState(false);
  const [allCookiesAccept, setAllCookiesAccept] = useState(true);

  function handleAcceptCookies() {}

  const handleSelectThirdPartyCookies = useCallback((value: boolean) => {
    setchirdPartyCookies(value);
  }, []);

  useEffect(() => {
    if (thirdPartyCookies) {
      setAllCookiesAccept(false);
    } else {
      setAllCookiesAccept(true);
    }
  }, [thirdPartyCookies]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container>
        <h1>Configurar cookies</h1>
        <p>
          Cookies são pequenos arquivos de texto criptografados que armazenam ou
          recuperam informações em seu navegador. Essas informações são
          utilizadas para lembrar suas preferências, permitir uma navegação
          eficiente entre páginas e melhorar sua experiência de navegação. Como
          respeitamos seu direito à privacidade, você pode optar por não
          permitir alguns tipos de cookies. Clique nos diferentes títulos das
          categorias para saber mais e gerenciar suas preferências. O bloqueio
          de alguns tipos de cookies pode afetar sua experiência no site e os
          serviços que podemos oferecer.
        </p>

        <form onSubmit={() => {}}>
          <div className="Toogles">
            <Toogle
              label="Estritamente obrigatórios"
              defaultValue={mandatoryCookies}
              disabled={allCookiesAccept}
            />
            <div style={{ marginTop: '0.5rem' }}>
              <Toogle
                seleted={handleSelectThirdPartyCookies}
                label="Cookies de terceiros"
                defaultValue={thirdPartyCookies}
              />
            </div>
          </div>
          <div className="containerBtns">
            <button type="button" onClick={AcceptMandatoriesCookies}>
              Confirmar escolha
            </button>
            <button
              type="button"
              className="btnAll"
              disabled={allCookiesAccept}
              onClick={AcceptAllCookies}
            >
              Aceitar todos Cookies
            </button>
          </div>
          <button type="button" onClick={onRequestClose} className="btnCancel">
            Cancelar
          </button>
        </form>
      </Container>
    </Modal>
  );
};
