import React, { InputHTMLAttributes } from 'react';
import { Container, Label, InputStyled } from './styles';

interface InputProps extends InputHTMLAttributes<any> {
  label: string;
  name: string;
}

export const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <Container>
      <Label htmlFor={name}>{label}</Label>
      <InputStyled id={name} name={name} {...rest} />
    </Container>
  );
};
