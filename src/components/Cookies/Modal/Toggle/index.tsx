/* eslint-disable react/require-default-props */
import { useState } from 'react';
import { Container, Label } from './styles';

type ToogleProps = {
  defaultValue?: boolean;
  label: string;
  disabled?: boolean;
  // eslint-disable-next-line react/no-unused-prop-types
  seleted?: (value: boolean) => void;
};

export const Toogle = ({
  defaultValue = false,
  label,
  disabled = false,
  seleted = null,
}: ToogleProps) => {
  const [checked, setChecked] = useState(defaultValue);

  return (
    <Container disabled={disabled}>
      <div className="containerLabelText">
        <p>{label}</p>
        <div className="containerTooltip">
          <span>?</span>
        </div>
      </div>
      <Label
        onClick={() => {
          if (!disabled) {
            setChecked(!checked);
            if (label.indexOf('Cookies de terceiros') > -1) {
              seleted(!checked);
            }
          }
        }}
      >
        <input
          type="checkbox"
          checked={checked}
          defaultChecked={checked}
          onChange={() => checked}
        />
        <span className="slider" />
      </Label>
    </Container>
  );
};
