import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ModalContext } from "../context/modalContext";


const ContainerCard = styled.div`
  border: 1px solid #ececec;
  border-radius: 5px;
  margin-top: 25px;
  overflow: hidden;
  width: 250px;

  h2,
  p {
    font-family: "Roboto", sans-serif;
    padding: 5px 10px;
  }

  button {
    margin: 15px 0 15px 15px;
  }
`;

const ContainerImg = styled.div`
  cursor: pointer;
  height: 300px;
  width: 250px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = ({ poster_path, title, overview, id, onClick}) => {
  const url = `https://image.tmdb.org/t/p/w500/${poster_path}`;
  const { setPeliculaId } = useContext(ModalContext);

  // Aquí abro el modal y obtengo el ID de la película
  const modalFunction = () => {
    onClick();
    setPeliculaId(id);
  }

  return (
    <>
      <ContainerCard>
        <ContainerImg onClick={modalFunction}>
          <img src={url} alt="" />
        </ContainerImg>
        <h2>{title}</h2>
        <p>{overview.substr(0, 100)}...</p>
      </ContainerCard>
    </>
  );
};

export default Card;
