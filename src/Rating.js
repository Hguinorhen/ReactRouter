import React from "react";

const Rating = ({ rateNbr, setSearchByRating }) => {
  //we need a function to conditionaly dispaly the stars color

  const stars = (star) => {
    //declare an empty array where we put our rating stars
    var starsArray = [];
    //we loop throw our rating number which we passed as props
    for (let i = 1; i < 6; i++) {
      if (i <= star) {
        starsArray.push(
          <span
            onClick={() => setSearchByRating(i)}
            style={{ fontSize: "100%", color: "yellow" }}
          >
            <i className="fa-solid fa-star"></i>
          </span>
        );
      } else {
        starsArray.push(
          <span
            onClick={() => setSearchByRating(i)}
            style={{ fontSize: "100%", color: "gray" }}
          >
            <i className="fa-solid fa-star"></i>
          </span>
        );
      }
    }
    return starsArray;
  };

  return <div>{stars(rateNbr)}</div>;
};

export default Rating;
