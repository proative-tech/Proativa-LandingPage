import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';

import * as S from './styles';

export type ButtonTextProps = {
  label: string;
  directionArrow?: 'left' | 'right' | 'top';
  href: string;
};
export const ButtonText = ({
  directionArrow = 'left',
  label,
  href,
}: ButtonTextProps) => {
  return (
    <S.Wrapper directionArrow={directionArrow}>
      <Link scroll={false} href={href} passHref>
        <a>
          <S.WrapperIcon>
            {directionArrow === 'left' ? (
              <FaArrowLeft color="#eb0029" />
            ) : (
              <FaArrowRight color="#eb0029" />
            )}
          </S.WrapperIcon>
          <S.WrapperButton>{label}</S.WrapperButton>
        </a>
      </Link>
    </S.Wrapper>
  );
};
