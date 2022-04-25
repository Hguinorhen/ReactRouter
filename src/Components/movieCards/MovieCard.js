import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Rating from "../../Rating";
import "./MovieCard.css";

const MovieCard = ({
  id,
  deleteFunction,
  movieInfo: { idItem, title, posterURL, rating },
}) => {
  const navigate = useNavigate();
  return (
    <div className="movieCard">
      <div className="cardHeader">
        <h3 className="title">{title}</h3>
        <button onClick={() => deleteFunction(id)} className="btnX">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>
      <div className="poster">
        <img src={posterURL} alt={title} />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom: "2%",
        }}
        className="cardBottom"
      >
        <button
          className="btn-details"
          onClick={() => navigate(`/movie-details/${idItem}`)}
        >
          DETAILS <i class="fa-solid fa-play"></i>
        </button>
        <Rating rateNbr={rating} />
      </div>
    </div>
  );
};

export default MovieCard;
