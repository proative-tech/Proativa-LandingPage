/* eslint-disable no-extra-boolean-cast */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState, useCallback, useRef, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { Link as LinkScroll } from 'react-scroll';

import {
  Container,
  Overlay,
  Content,
  ButtonClose,
  Item,
  ContainerLinks,
} from './styles';

const links = [
  { name: 'Todas Soluções', href: '/solucoes' },
  {
    name: 'Managed Services',
    href: '/solucoes/service-manager',
  },
  {
    name: 'Consulting Services',
    href: '/solucoes/consultancy',
  },
  {
    name: 'Cyber Security Services',
    href: '/solucoes/cybersecurity',
  },
  {
    name: 'Professional Services',
    href: '/solucoes/professionals',
  },

  {
    name: 'RPA',
    href: '/solucoes/rpa',
  },
];
const linksTwo = [
  { name: 'Todos Mercados', to: 'mkt-top', href: '/mercados' },
  { name: 'Logística', to: 'mkt-logista', href: '/mercados' },
  {
    name: 'Health And Care',
    to: 'mkt-Health',
    href: '/mercados',
  },
  {
    name: 'Contrução Civil',
    to: 'mkt-contrucao',
    href: '/mercados',
  },
  {
    name: 'Financeiro',
    to: 'mkt-Financeiro',
    href: '/mercados',
  },
  { name: 'Outros', to: 'mkt-Outros', href: '/mercados' },
];

export const DrawerMenu = ({ onCloseDrawer }) => {
  const [activedSolutions, setActivedSolutions] = useState(false);
  const [activedMkt, setActivedMkt] = useState(false);

  const router = useRouter();
  const refQuemSomos = useRef(null);

  const handleClickNoIndex = useCallback(() => {
    const storeSetItem = localStorage.getItem('@CLICK_QUEM_SOMOS');

    if (router.asPath.length > 1 && !storeSetItem) {
      localStorage.setItem('@CLICK_QUEM_SOMOS', 'true');
    }
  }, [router.asPath]);

  return (
    <Container>
      <Overlay onClick={onCloseDrawer} />

      <Content>
        <ButtonClose>
          <button type="button" onClick={onCloseDrawer}>
            <Image src="/images/x.svg" width={23} height={23} />
          </button>
        </ButtonClose>

        <ul>
          <Item>
            <Link href="/" passHref>
              HOME
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              <LinkScroll
                to="about-link"
                duration={700}
                offset={-90}
                smooth
                style={{ cursor: 'pointer' }}
                onClick={() => {
                  handleClickNoIndex();
                  onCloseDrawer();
                }}
                ref={refQuemSomos}
              >
                QUEM SOMOS
              </LinkScroll>
            </Link>
          </Item>
          <Item modifiersDropdown actived={activedSolutions}>
            <span
              onClick={() => {
                setActivedMkt(false);
                setActivedSolutions(!activedSolutions);
              }}
            >
              SOLUÇÕES
            </span>
            <ContainerLinks actived={activedSolutions}>
              {links.map((link, index) => (
                <li key={String(index)}>
                  <Link href={link.href} passHref>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ContainerLinks>
          </Item>

          {/* <Item modifiersDropdown actived={activedMkt}>
            <span
              onClick={() => {
                setActivedMkt(!activedMkt);
                setActivedSolutions(false);
              }}
            >
              MERCADOS
            </span>
            <ContainerLinks actived={activedMkt}>
              {linksTwo.map((link, index) => (
                <li key={String(index)}>
                  <Link href={link.href} scroll={false}>
                    <LinkScroll
                      onClick={() => {
                        onCloseDrawer();
                      }}
                      to={`${link.to}`}
                      duration={700}
                      smooth
                      style={{ cursor: 'pointer' }}
                      href={link.href}
                    >
                      {link.name}
                    </LinkScroll>
                  </Link>
                </li>
              ))}
            </ContainerLinks>
          </Item> */}

          {/* <Item>
            <Link href="/cases" passHref>
              CASES
            </Link>
          </Item> */}
          <Item>
            <Link href="/carreiras" passHref>
              CARREIRAS
            </Link>
          </Item>
          <Item>
            <Link scroll={false} href="/blog" passHref>
              BLOG
            </Link>
          </Item>
          <Item>
            <Link scroll={false} href="/fale-conosco" passHref>
              FALE CONOSCO
            </Link>
          </Item>
          <Item>
            <Link href="/" passHref>
              PORTAIS
            </Link>
          </Item>
        </ul>
      </Content>
    </Container>
  );
};
