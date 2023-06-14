import { Fragment, useState } from "react";
import styled from '@emotion/styled';

const Label = styled.label`
  
font-family: 'Bebas Neue',cursivve;
color: #fff;
text-transform: upercase;
font-weight: bold;
font-size:2.4rem;
margin-top: 2rem;
display: block;
`;

const Select = styled.select`

width: 100%;
display: block;
padding: 1rem;
-webkit-apparance: none;
border-radius: 10px;
border: none;  
font-size: 1rem;
`

const useCripto = (label, stateInicial, opciones) => {

  const [state, setState] = useState(stateInicial);



  const SelecCripto = () => (
    <Fragment>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">--Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.CoinInfo.Id} value={opcion.CoinInfo.Name}>
            {opcion.CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </Fragment>
  );

  return [state, SelecCripto, setState];
};

export default useCripto;
