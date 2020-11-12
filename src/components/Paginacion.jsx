import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ListaPeliculasContext } from '../context/listaPeliculasContext';

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

const Paginacion = () => {
  const { setPage } = useContext(ListaPeliculasContext);

  return (
    <ContenedorPaginacion>
      <li id="1" onClick={e => setPage(e.target.id)}>1</li>
      <li id="2" onClick={e => setPage(e.target.id)}>2</li>
      <li id="3" onClick={e => setPage(e.target.id)}>3</li>
      <li id="4" onClick={e => setPage(e.target.id)}>4</li>
      <li id="5" onClick={e => setPage(e.target.id)}>5</li>
      <li id="6" onClick={e => setPage(e.target.id)}>6</li>
      <li id="7" onClick={e => setPage(e.target.id)}>7</li>
      <li id="8" onClick={e => setPage(e.target.id)}>8</li>
      <li id="9" onClick={e => setPage(e.target.id)}>9</li>
      <li id="10" onClick={e => setPage(e.target.id)}>10</li>
    </ContenedorPaginacion>
  );
};

export default Paginacion;
