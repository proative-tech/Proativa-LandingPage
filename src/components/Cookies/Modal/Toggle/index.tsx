import { useState } from 'react';
import { Container, Label } from './styles';

export const Toogle = () => {
  const [checked, setChecked] = useState(false);

  return (
    <Container>
      <div className="containerLabelText">
        <p>Estritamente necessários</p>
        <div className="containerTooltip">
          <span>?</span>
        </div>
      </div>
      <Label onClick={() => setChecked(!checked)}>
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
