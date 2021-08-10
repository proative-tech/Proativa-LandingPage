import Link from 'next/link';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { Link as LinkScroll } from 'react-scroll';
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

  useEffect(() => {
    if (Router.asPath !== 'mercados') {
      setNoMkT(true);
    } else {
      setNoMkT(false);
    }
  }, []);

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
            >
              {link.name}
            </LinkScroll>
          </Link>
        </li>
      ))}
    </Container>
  );
};
