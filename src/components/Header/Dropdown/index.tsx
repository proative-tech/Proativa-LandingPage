import Link from 'next/link';
import { Container } from './styles';

interface LinkData {
  name: string;
  href: string;
}

interface DropdownMenuProps {
  links: LinkData[];
}

export const DropdownMenu = ({ links = [] }: DropdownMenuProps) => {
  return (
    <Container>
      {links.map((link, index) => (
        <li key={String(index)}>
          <Link href={link.href} passHref>
            {link.name}
          </Link>
        </li>
      ))}
    </Container>
  );
};
