import React, { useContext } from 'react';
import Boton from './Boton';
import Styled from '@emotion/styled';
import { ListaPeliculasContext } from '../context/listaPeliculasContext';

const BotonesStyles = Styled.div`
  button:nth-of-type(1) {
    background: green;
  }

  button:nth-of-type(2) {
    background: red;
  }

  button:nth-of-type(3) {
    background: orange;
  }

  button:nth-of-type(4) {
    background: blue;
  }
`;

const Botones = () => {
  const { setOpcion, setPage } = useContext(ListaPeliculasContext);

  // Esta parte de código es para que la página se regrese a 1 cuando se cambie la opción
  const resetearPage = opcion => {
    setOpcion(opcion);
    setPage(1);
  }

  return (
    <BotonesStyles>
      <Boton contenido="Popular" onClick={() => resetearPage('popular')} />
      <Boton contenido="Top Rated" onClick={() => resetearPage('top_rated')}  />
      <Boton contenido="Upcoming" onClick={() => resetearPage('upcoming')} />
      <Boton contenido="Now playing" onClick={() => resetearPage('now_playing')} />
    </BotonesStyles>
  );
}

export default Botones;