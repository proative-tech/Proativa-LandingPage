import Link from 'next/link';
import Image from 'next/image';

import { Nav } from './Nav';

import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <h1>
          <Link href="/" passHref>
            <Image
              src="/images/logo.svg"
              width={168}
              height={67}
            />
          </Link>
        </h1>

        <Nav />
      </Content>
    </Container>
  );
};

