import Modal from 'react-modal';

import { Container } from './styles';
import { Toogle } from './Toggle';

interface ConfigCookiesProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement('#__next');

export const ConfigCookies = ({
  isOpen,
  onRequestClose,
}: ConfigCookiesProps) => {
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
          <Toogle />
          <Toogle />
          <div className="containerBtns">
            <button type="button">Confirmar escolha</button>
            <button type="button" className="btnAll" disabled>
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
