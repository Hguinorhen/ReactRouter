import React from "react";
import Rating from "../../Rating";
import { useParams, useNavigate } from "react-router-dom";

const Description = ({ moviesList }) => {
  const params = useParams();
  console.log(params);
  let movie = moviesList.find((film) => film.idItem === +params.idItem);
  //   console.log(moviesList);
  const navigate = useNavigate();
  return (
    <div className="descriptionComponent">
      <div className="img-container">
        <img src={movie.posterURL} alt={movie.title} />
      </div>
      <div className="detailsDiv">
        <div className="divTop">
          <h1>
            {movie.title}&nbsp;
            <span style={{ fontSize: "25px" }}>released</span> {movie.year}
          </h1>
          <p>{movie.description}</p>
        </div>
        <div className="divBottom">
          <button onClick={() => navigate("/")}>
            <i class="fa-solid fa-caret-left"></i> GO BACK
          </button>
          <Rating rateNbr={movie.rating} />
        </div>
      </div>
    </div>
  );
};

export default Description;
