import React from 'react';
import styled from '@emotion/styled';

const ContenedorPaginacion = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 25px;
  width: 400px;

  li {
    color: #000;
    cursor: pointer;
    background: white;
    padding: 10px 15px;
    border: 1px solid #ececec;
  }

  li:hover {
    border: 3px solid #333;
  }
`;

const Paginacion = ({setPage}) => {
  const obtenerNumero = e => {
    setPage(Number(e.target.id));
  }

  return (
    <ContenedorPaginacion>
      <li id="1" onClick={obtenerNumero}>1</li>
      <li id="2" onClick={obtenerNumero}>2</li>
      <li id="3" onClick={obtenerNumero}>3</li>
      <li id="4" onClick={obtenerNumero}>4</li>
      <li id="5" onClick={obtenerNumero}>5</li>
      <li id="6" onClick={obtenerNumero}>6</li>
      <li id="7" onClick={obtenerNumero}>7</li>
      <li id="8" onClick={obtenerNumero}>8</li>
      <li id="9" onClick={obtenerNumero}>9</li>
      <li id="10" onClick={obtenerNumero}>10</li>
    </ContenedorPaginacion>
  );
}

export default Paginacion;