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
        Automatize procedimentos e atividades importantes para verificar integridade e validação dos dados, reduzindo o tempo de processamento de horas para minutos com a integração de automação. Simplifique várias operações vitais e importantes em sua organização.
        </p>
      </S.Content>
    </S.Wrapper>
  );
};
