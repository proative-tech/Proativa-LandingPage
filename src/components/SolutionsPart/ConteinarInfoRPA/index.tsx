import { useEffect, useState } from 'react';

import * as S from './styles';

export const ContainerInfoRPA = () => {
  const [isAnimated, setIsAnimated] = useState(false);

  const handleScroll = () => {
    const ele: Element | any = document.getElementById('containerInfoRPA');

    const getWindowBottom = window.scrollY + window.innerHeight;
    // const heightEle = ele?.getBoundingClientRect().bottom + window.scrollY - 600;
    const heightEle: any =
      ele?.getBoundingClientRect().top + window.scrollY + 100;

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
    <S.Wrapper id="containerInfoRPA" visibled={isAnimated}>
      <S.Content>
        <h2>O que mais pode ser feito?</h2>
        <h4>Automação Excel</h4>
        <p>
          Automatize os procedimentos e atividades da planilha do Excel para
          verificar a integridade e validação dos dados e reduzir o tempo de
          processamento de dados de horas para minutos. Com a integração de
          automação do Excel e automação de processos robóticos, automatize
          várias operações vitais e importantes, mas repetitivas em sua
          organização.
        </p>
      </S.Content>
    </S.Wrapper>
  );
};
