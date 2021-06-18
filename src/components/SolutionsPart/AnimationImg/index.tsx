import * as S from './styles';

export type AnimationImgProps = {
  animationDirection?: 'leftToRight' | 'rightToLeft';
  url: string;
  height?: number;
  // ultra wide
  heightUW?: number;
};

export const AnimationImg = ({
  animationDirection = 'leftToRight',
  url,
  height,
  heightUW,
}: AnimationImgProps) => {
  return (
    <S.Wrapper
      animationDirection={animationDirection}
      url={url}
      height={height}
      heightUW={heightUW}
    />
  );
};
