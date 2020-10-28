import React, { useState, useEffect } from "react";
import Boton from "./components/Boton";
import Header from "./components/Header";
import styled from "@emotion/styled";
import Card from "./components/Card";
import Paginacion from "./components/Paginacion";

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;

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

const ContainerPeliculas = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
`;

const App = () => {
  // State de películas
  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState(1);
  const [opcion, setOpcion] = useState('popular');

  // Token de seguridad
  const api_key = "be551fe925440e6bdc79ff1df5221797";

  const consultarApi = async (e) => {
    // Aqui obtengo el tipo de lista de películas si es la primera vez será popular por defecto
    // const name = e ? e.target.name : 'popular';
    const consultarPopular = await fetch(`https://api.themoviedb.org/3/movie/${opcion}?api_key=${api_key}&page=${page}`);
    const datosJson = await consultarPopular.json();
    const datos = datosJson.results;

    // Guardo el array con las películas obtenidas desde la api
    setPeliculas(
      datos.map((dato) => (
        <Card
          key={dato.id}
          poster_path={dato.poster_path}
          title={dato.title}
          overview={dato.overview}
        />
      ))
    );

    if(e) {
      setPage(1);
      setOpcion(e.target.name); 
    };
  };

  // Al cargar la página
  useEffect(() => {
    consultarApi();
  }, [page, opcion]);

  return (
    <>
      <Header />
      <Container>
        <Boton 
          contenido="Popular" 
          onClick={consultarApi}
          name="popular"
          setPage={setPage}
        />
        <Boton 
          contenido="Top Rated" 
          onClick={consultarApi}
          name="top_rated"
        />
        <Boton 
          contenido="Upcoming" 
          onClick={consultarApi}
          name="upcoming" 
        />
        <Boton
          contenido="Now playing"
          onClick={consultarApi}
          name="now_playing"
        />

        <ContainerPeliculas>
          {peliculas.map((pelicula) => pelicula)}
        </ContainerPeliculas>

        <Paginacion setPage={setPage} />
      </Container>
    </>
  );
};

export default App;
