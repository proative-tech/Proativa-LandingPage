import { ButtonHTMLAttributes, ReactNode } from 'react';

import { Container } from './styles';

interface ButtonComponentProps extends ButtonHTMLAttributes<any>{
  buttonType?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({ buttonType = 'primary', children, ...rest }: ButtonComponentProps) {
  return (
    <Container buttonType={buttonType} {...rest}>
      {children}
    </Container>
  );
};

