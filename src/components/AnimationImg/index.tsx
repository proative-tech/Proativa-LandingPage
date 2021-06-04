/* eslint-disable react/require-default-props */
import { useState } from 'react';
import { RiAddFill } from 'react-icons/ri';

import * as S from './styles';

type AnimationProps = {
  visibled?: boolean;
};

export const AnimationImg = ({ visibled = false }: AnimationProps) => {
  const [isHover, setIsHover] = useState(false);

  return (
    <S.Wrapper
      isHover={isHover}
      visibled={visibled}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
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
