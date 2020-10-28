import React from 'react';
import styled from '@emotion/styled';

const BotonStyled = styled.button`
  border: none;
  border-radius: 5px;
  color: #ffffff;
  cursor: pointer;
  font-family: 'Lobster', cursive;
  font-size: 15px;
  margin-right: 1rem;
  padding: 5px 10px;
  transition: all .3s;

  &:hover {
    padding: 5px 15px;
  }
`;

const Boton = ({contenido, onClick}) => {
  return (
    <BotonStyled onClick={onClick} >{contenido}</BotonStyled>
  );
}

export default Boton;