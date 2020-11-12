import React, { useContext } from "react";
import Card from "./Card";
import ModalComponent from "./Modal";
import { ListaPeliculasContext } from "../context/listaPeliculasContext";
import { ModalContext } from "../context/modalContext";
import Styled from "@emotion/styled";

const ListaPeliculasStyles = Styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 1200px;
  margin: 0 auto;
`;

const ListaPeliculas = () => {
  const { peliculas } = useContext(ListaPeliculasContext);
  const { setOpen } = useContext(ModalContext);

  return (
    <ListaPeliculasStyles>
      {peliculas.map((pelicula) => (
        <Card
          key={pelicula.id}
          poster_path={pelicula.poster_path}
          title={pelicula.title}
          overview={pelicula.overview}
          id={pelicula.id}
          onClick={() => setOpen(true)}
        />
      ))}

      <ModalComponent />
    </ListaPeliculasStyles>
  );
};

export default ListaPeliculas;
