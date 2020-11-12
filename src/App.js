import React from "react";
import { ListaPeliculasProvider } from "./context/listaPeliculasContext";
import { ModalProvider } from "./context/modalContext";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Paginacion from "./components/Paginacion";
import ListaPeliculas from "./components/ListaPeliculas";
import Botones from "./components/Botones";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

const App = () => {
  return (
    <ListaPeliculasProvider>
      <ModalProvider>
        <Header />
        <Container>
          <Botones />
          <ListaPeliculas />
          <Paginacion />
        </Container>
      </ModalProvider>
    </ListaPeliculasProvider>
  );
};

export default App;
