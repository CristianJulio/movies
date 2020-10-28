import React, { useState, useEffect } from 'react';
import Boton from './components/Boton';
import Header from './components/Header';
import styled from '@emotion/styled';
import Card from './components/Card';

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
`;

const App = () => {
  // State de películas
  const [peliculas, setPeliculas] = useState([]);

  // Token de seguridad
  const api_key = 'be551fe925440e6bdc79ff1df5221797';

  // Al cargar la página
  useEffect(() => {
    consultarPopular(setPeliculas);
  }, []);


  const consultarPopular = async () => {
    const consultarPopular = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}`);
    const datosJson = await consultarPopular.json();
    const datos = datosJson.results;
    setPeliculas(
      datos.map(dato => <Card key={dato.id} poster_path={dato.poster_path} title={dato.title} overview={dato.overview} />)
    );
  }

  const consultarTopRated = async () => {
    const consultarTopRated = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}`);
    const datosJson = await consultarTopRated.json();
    const datos = datosJson.results;
    setPeliculas(
      datos.map(dato => <Card key={dato.id} poster_path={dato.poster_path} title={dato.title} overview={dato.overview} />)
    );
  }

  const consultarUpcoming = async () => {
    const consultarUpcoming = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}`);
    const datosJson = await consultarUpcoming.json();
    const datos = datosJson.results;
    setPeliculas(
      datos.map(dato => <Card key={dato.id} poster_path={dato.poster_path} title={dato.title} overview={dato.overview} />)
    );
  }

  const consultarNowPlaying = async () => {
    const consultarNowPlaying = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}`);
    const datosJson = await consultarNowPlaying.json();
    const datos = datosJson.results;
    setPeliculas(
      datos.map(dato => <Card key={dato.id} poster_path={dato.poster_path} title={dato.title} overview={dato.overview} />)
    );
  }

  return (
    <>
      <Header />
      <Container>
        <Boton contenido="Popular" onClick={consultarPopular} />
        <Boton contenido="Top Rated" onClick={consultarTopRated} />
        <Boton contenido="Upcoming" onClick={consultarUpcoming} />
        <Boton contenido="Now playing" onClick={consultarNowPlaying} />

        <ContainerPeliculas>
          {peliculas.map(pelicula => pelicula)}
        </ContainerPeliculas>
      </Container>
    </>
  );
}

export default App;