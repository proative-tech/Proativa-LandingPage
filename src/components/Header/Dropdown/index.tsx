import Link from 'next/link';
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

export const DropdownMenu = ({ links = [] }: DropdownMenuProps) => {
  return (
    <Container>
      {links.map((link, index) => (
        <li key={String(index)}>
          <Link href={link.href} passHref scroll={false}>
            {link.name}
          </Link>
        </li>
      ))}
    </Container>
  );
};
