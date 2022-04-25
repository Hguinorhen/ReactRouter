import React from "react";
import ReactPlayer from "react-player";
import { useParams } from "react-router-dom";

const Trailer = ({ moviesList }) => {
  const params = useParams();
  let movie = moviesList.find((film) => film.idItem === +params.idItem);
  return (
    <div>
      <ReactPlayer
        width="840px"
        height="450px"
        style={{
          marginLeft: "20%",
        }}
        url={movie.trailerURL}
        playing="true"
      />
    </div>
  );
};

export default Trailer;
