/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from 'react';
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
    name: 'Services Managed',
    href: '/solucoes/service-manager',
  },
  { name: 'Cybersecurity', href: '/solucoes/cybersecurity' },
  {
    name: 'Serviços Profissionais',
    href: '/solucoes/professionals',
  },
  { name: 'Consultoria', href: '/solucoes/consultancy' },
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
            <LinkScroll
              to="about-link"
              duration={700}
              smooth
              style={{ cursor: 'pointer' }}
              onClick={() => {
                onCloseDrawer();
              }}
            >
              QUEM SOMOS
            </LinkScroll>
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
                  <Link href={link.href} passHref scroll={false}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ContainerLinks>
          </Item>

          <Item modifiersDropdown actived={activedMkt}>
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
          </Item>

          <Item>
            <Link href="/cases" passHref>
              CASES
            </Link>
          </Item>
          <Item>
            <Link href="/carreiras" passHref>
              CARREIRAS
            </Link>
          </Item>
          <Item>
            <Link href="/blog" passHref>
              BLOG
            </Link>
          </Item>
          <Item>
            <Link href="/fale-conosco" passHref>
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
