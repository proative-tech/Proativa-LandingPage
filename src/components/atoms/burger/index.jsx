import { useCallback, useState } from 'react';

import ImgBurger from '../../../assets/burguer.svg';
import { DrawerMenu } from '../../molecules/Drawer';

import { Container } from './styles';

export const MenuBurger = () => {
    const [activedDrawer, setActivedDrawer] = useState(false)

    const onCloseDrawer = useCallback(() => {
        setActivedDrawer(!activedDrawer)
    }, [activedDrawer])

    return (
        <>
            <Container onClick={() => setActivedDrawer(!activedDrawer)}>
                <img src={ImgBurger} alt=""/>
            </Container>

            {
                activedDrawer && (
                    <DrawerMenu onCloseDrawer={onCloseDrawer} />
                )
            }
        </>
    )
}