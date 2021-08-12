import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Container, Content, Info } from './styles';

export const ConteinerInfosThree = () => {
  const isMobileOrTabled = useMediaQuery({ maxWidth: 928 });
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerInfosOne');

    const getWindowBottom = window.scrollY + window.innerHeight;
    // const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY - 300;
    const heightEle = ele?.getBoundingClientRect().top + window.scrollY + 100;

    if (!isAnimated && getWindowBottom >= heightEle) {
      setIsAnimated(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container visibled={isAnimated} id="containerInfosOne">
      <Content>
        <Info>
          <div className="containerImg">
            <img src="/images/LGPD.svg" alt="Seja Proativo" />
          </div>
          <p className="title">LGPD</p>
          <p>
            Uma jornada tranquila e prática para conformidade com a nova lei.
          </p>
        </Info>
        <Info>
          <div className="containerImg">
            <img src="/images/MSSP.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Security Manager</p>
          <p>
          Aumentar a segurança, gerenciar ameaças e riscos nos diversos ambientes de rede. Ajudamos você fazer a escolha correta da melhor solução para reduzir a superfície de ataque da sua infraestrutura.
          </p>
        </Info>
        <Info>
          <div className="containerImg">
            <img src="/images/Security-manager.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Suporte Técnico</p>
          <p>
            Consulte nossos pacotes de atendimento disponíveis. Tenha
            atendimento profissional especializado, altamente certificado e
            referenciados diretamente pelos principais fornecedores de segurança
            do mercado.
          </p>
        </Info>
        <Info>
          <div className="containerImg">
            <img src="/images/Suporte-Tecnico.svg" alt="Seja Proativo" />
          </div>
          <p className="title">Serviços Gerenciados - MSS</p>
          <p>
            O MSSP da Proative possui a melhor relação custo x benefício x
            proteção, oferecendo aos nossos clientes proteção em tempo real,
            além da gestão e supervisão de especialistas prontos para elevar a
            conformidade, reduzindo o risco e impacto das ameaças de TI.
          </p>
        </Info>
      </Content>
    </Container>
  );
};
