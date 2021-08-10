import { useCallback, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

import { DrawerMenu } from '../Drawer';

import { Container } from './styles';

export const MenuBurger = () => {
  const [activedDrawer, setActivedDrawer] = useState(false);
  const router = useRouter();

  const onCloseDrawer = useCallback(() => {
    setActivedDrawer(!activedDrawer);
  }, [activedDrawer]);

  return (
    <>
      <Container onClick={() => setActivedDrawer(!activedDrawer)}>
        <Image src="/images/burguer.svg" width={40} height={40} />
      </Container>

      {activedDrawer && <DrawerMenu onCloseDrawer={onCloseDrawer} />}
    </>
  );
};
