/* eslint-disable react/require-default-props */
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';

import * as S from './styles';

type AnimationProps = {
  visibled?: boolean;
  isHover?: boolean;
};

export const AnimationImg = ({
  visibled = false,
  isHover = false,
}: AnimationProps) => {
  return (
    <S.Wrapper isHover={isHover} visibled={visibled}>
      {isHover ? (
        <>
          <RiAddFill />
          <span>Escritório Proative</span>
        </>
      ) : (
        <>
          <RiAddFill />
          <span>Escritório Proative</span>
        </>
      )}
    </S.Wrapper>
  );
};
