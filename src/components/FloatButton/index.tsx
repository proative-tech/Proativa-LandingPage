import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import Cookies from 'js-cookie';

import * as S from './styles';

export const FloatButton = () => {
  const cookie = Cookies.get('cookieTesteProative');

  const [isAnimated, setIsAnimated] = useState(false);
  const [isCookieActived, setIsCookieActived] = useState(false);

  const handleScroll = () => {
    const getWindowBottom = window.scrollY > 250;

    if (getWindowBottom) {
      setIsAnimated(true);
    } else {
      setIsAnimated(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const cookieAux = cookie !== undefined;
    setIsCookieActived(cookieAux);
  }, [cookie]);

  return (
    <S.Wrapper isAnimated={isAnimated} isCookieActived={isCookieActived}>
      <Link
        to="headerScroll"
        smooth
        duration={700}
        style={{
          display: 'inline-block',
          zIndex: 20,
          width: 60,
          height: 40,
          cursor: 'pointer',
        }}
      >
        <img src="/images/arrow-go-top.svg" alt="seta para cima" />
      </Link>
    </S.Wrapper>
  );
};
