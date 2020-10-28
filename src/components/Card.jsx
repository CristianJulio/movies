import React from "react";
import styled from "@emotion/styled";

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
`;

const ContainerImg = styled.div`
  width: 250px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Card = ({ poster_path, title, overview }) => {
  const url = `https://image.tmdb.org/t/p/w500/${poster_path}`;

  return (
    <ContainerCard>
      <ContainerImg>
        <img src={url} alt="" />
      </ContainerImg>
      <h2>{title}</h2>
      <p>{overview.substr(0, 100)}...</p>
    </ContainerCard>
  );
};

export default Card;
