import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./movieDetails.css";

const MovieDetails = () => {
  return (
    <div className="movieDetails">
      <nav>
        <NavLink to="description">Description</NavLink>
        <NavLink to="trailer">Trailer</NavLink>
      </nav>

      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetails;
