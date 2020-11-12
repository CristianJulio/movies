import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { ModalContext } from '../context/modalContext';
import Styled from '@emotion/styled';

const BodyStyles = Styled.div`
  p {
    margin: 10px 0;
    line-height: 25px;
  }

  img {
    width: 100%;
  }

  span {
    display: block;
    font-weight: bold;
    /* margin-bottom: 5px; */
  }
`;

function getModalStyle() {
  const top = 49;
  const left = 49;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 700,
    height: 550,
    overflow: 'scroll',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));

const ModalComponent = () => {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const { open, peliculainfo, setOpen, setPeliculaId, setPeliculaInfo } = useContext(ModalContext);
  
  const handleClose = () => {
    setOpen(false);
    setPeliculaId();
    setPeliculaInfo({});
  };

  // Extraigo los datos que usaré en el modal
  const { backdrop_path, original_title, adult, overview, release_date, status, vote_average, vote_count, genres } = peliculainfo;
  const generos = genres ? [...genres].map(genero => `${genero.name} `) : [];

  const body = (
    <BodyStyles style={modalStyle} className={classes.paper}>
      <img src={`https://image.tmdb.org/t/p/w500${backdrop_path}` || ""} alt=""/>
      <p><span className={classes.titulo}>Titulo Original:</span> {original_title || ""}</p>
      <p><span className={classes.titulo}>+18: </span>{adult ? "Si" : "No"}</p>
      <p><span className={classes.titulo}>Generos: </span>{generos}</p>
      <p><span className={classes.titulo}>Resumen: </span>{overview || ""}</p>
      <p><span className={classes.titulo}>Fecha de estreno: </span>{new Date(release_date).toLocaleDateString()}</p>
      <p><span className={classes.titulo}>Estado: </span>{status}</p>
      <p><span className={classes.titulo}>Puntuación de Usuario: </span>{vote_average}</p>
      <p><span className={classes.titulo}>Votos Totales: </span>{vote_count}</p>
    </BodyStyles>
  );

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      >
        {body}
    </Modal>
  );
}

export default ModalComponent;