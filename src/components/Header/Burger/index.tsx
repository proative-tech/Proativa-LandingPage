import { useCallback, useState } from 'react';
import Image from 'next/image';

import { DrawerMenu } from '../Drawer';

import { Container } from './styles';

export const MenuBurger = () => {
  const [activedDrawer, setActivedDrawer] = useState(false);

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
