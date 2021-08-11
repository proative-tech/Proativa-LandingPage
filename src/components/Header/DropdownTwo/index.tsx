import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { Link as LinkScroll, animateScroll as scroll } from 'react-scroll';
import { useMediaQuery } from 'react-responsive';
import { Container } from './styles';

interface LinkData {
  name: string;
  href?: string;
  to?: string;
}

interface DropdownMenuProps {
  links: LinkData[];
}

export const DropdownMenuTwo = ({ links = [] }: DropdownMenuProps) => {
  const [noMkt, setNoMkT] = useState(false);
  const router = useRouter();

  const isMobileOrTablet = useMediaQuery({ maxWidth: 920 });
  const ref = React.useRef<any>(null);

  const handleClickNoIndex = React.useCallback(
    (to: string) => {
      const storeSetItem = localStorage.getItem('@CLICK_DROPDOWN_HOME');

      if (router.asPath.length > 1 && !storeSetItem) {
        localStorage.setItem('@CLICK_DROPDOWN_HOME', to);
      }
    },
    [router.asPath],
  );

  useEffect(() => {
    if (router.asPath !== 'mercados') {
      setNoMkT(true);
    } else {
      setNoMkT(false);
    }
  }, []);

  /**
   ** VERIFICA SE EXISTE NO LOCALSTORATE ALGUMA CHAVE PARA CONTROLAR EVENTO DE CLICK NO LINK
   **  ACIONA O SCROLL PARA O ELEMENTO CLICADO E REMOVE DO LOCALSTORAGE
   * */

  // useEffect(() => {
  //   console.log(router.asPath.length);
  //   if (router.asPath.length === 1) {
  //     const storeSetItem = localStorage.getItem('@CLICK_DROPDOWN_HOME');

  //     if (storeSetItem) {
  //       scroll.scrollTo(700, {
  //         duration: 700,
  //         smooth: true,
  //       });

  //       setTimeout(() => {
  //         // ref?.current?.scrollTo('about-link', {
  //         //   duration: 700,
  //         //   smooth: true,
  //         // });

  //         localStorage.removeItem('@CLICK_DROPDOWN_HOME');
  //       }, 1000);
  //     }
  //   }
  // }, [router.asPath]);

  return (
    <Container>
      {links.map((link, index) => (
        <li key={String(index)}>
          <Link href={link.href} scroll={false}>
            <LinkScroll
              to={`${link.to}`}
              duration={700}
              offset={-50}
              smooth
              style={{ cursor: 'pointer' }}
              href={link.href}
              onClick={() => handleClickNoIndex(link.to)}
              ref={ref}
            >
              {link.name}
            </LinkScroll>
          </Link>
        </li>
      ))}
    </Container>
  );
};
