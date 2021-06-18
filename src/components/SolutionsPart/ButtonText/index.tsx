import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import * as S from './styles';

export type ButtonTextProps = {
  label: string;
  directionArrow?: 'left' | 'right';
};

export const ButtonText = ({
  directionArrow = 'left',
  label,
}: ButtonTextProps) => {
  return (
    <S.Wrapper directionArrow={directionArrow}>
      <S.WrapperIcon>
        {directionArrow === 'left' ? (
          <FaArrowLeft color="#eb0029" />
        ) : (
          <FaArrowRight color="#eb0029" />
        )}
      </S.WrapperIcon>
      <S.WrapperButton>{label}</S.WrapperButton>
    </S.Wrapper>
  );
};
