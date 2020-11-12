import React, { createContext, useState, useEffect } from 'react';

export const ListaPeliculasContext = createContext();

export const ListaPeliculasProvider = props => {
  const [peliculas, setPeliculas] = useState([]);
  const [page, setPage] = useState(1);
  const [opcion, setOpcion] = useState("popular");

  const api_key = "be551fe925440e6bdc79ff1df5221797";

  useEffect(() => {
    const consultarApi = async () => {
      const consultarApi = await fetch(`https://api.themoviedb.org/3/movie/${opcion}?api_key=${api_key}&page=${page}`);
      const datosJson = await consultarApi.json();
      const datos = datosJson;
      setPeliculas(datos.results);

      const header = document.querySelector('.header');
      header.scrollIntoView({behavior: 'smooth'})
    }
    consultarApi();
  }, [opcion, page]);

  return (
    <ListaPeliculasContext.Provider value={{
      peliculas,
      setOpcion,
      setPage
    }}>
      {props.children}
    </ListaPeliculasContext.Provider>
  );
}