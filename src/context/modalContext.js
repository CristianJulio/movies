import React, { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

export const ModalProvider = props => {
  const [open, setOpen] = React.useState(false);
  const [peliculaid, setPeliculaId] = useState();
  const [peliculainfo, setPeliculaInfo] = useState({});

  const obtenerInfoPelicula = async () => {
    const obtenerInfoPelicula = await fetch(`https://api.themoviedb.org/3/movie/${peliculaid}?api_key=be551fe925440e6bdc79ff1df5221797&language=es-mx`);
    const datosJson = await obtenerInfoPelicula.json();
    const datos = datosJson;
    setPeliculaInfo(datos)
  }

  useEffect(() => {
    if (peliculaid === undefined) return;
    obtenerInfoPelicula();
    //eslint-disable-next-line
  }, [peliculaid]);

  return (
    <ModalContext.Provider value={{
      open,
      peliculainfo,
      setOpen,
      setPeliculaInfo,
      setPeliculaId
    }}>
      {props.children}
    </ModalContext.Provider>
  );
}