import React, { useState } from "react";
import "./searchMovie.css";
import Rating from "../../Rating";
// import { Link } from "react-router-dom";

function SearchMovie({ setSearchByTitle, setSearchByRating, searchByRating }) {
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    const newValue = e.target.value;
    setSearchInput(newValue);
  };
  const handleEnterKey = (e) => {
    if (e.key === "Enter") {
      setSearchByTitle(e.target.value);
      e.preventDefault();
      setSearchInput("");
    }
  };

  return (
    <div className="searchMovie">
      <div className="search-container">
        <div className="search-title">
          <div className="divTitle">
            <span className="searchTxt"> </span>
          </div>
          <div className="box">
            <form name="search">
              <input
                className="input"
                type="text"
                name="text"
                value={searchInput}
                onChange={(e) => handleSearch(e)}
                onKeyDown={(e) => handleEnterKey(e)}
              />
            </form>
            <i className="fas fa-search"></i>
          </div>
        </div>
        <div className="search-rating">
          <span className="searchTxt"> </span>
          <Rating
            setSearchByRating={setSearchByRating}
            rateNbr={searchByRating}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchMovie;
