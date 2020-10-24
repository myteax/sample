import React from "react";
import Button from "../Button";
import "./Cards.css";

const Cards = () => {
  return (
    <div>
      <div className="card">
        <div className="img1">
          <img
            className="img"
            src="https://elearningindustry.com/wp-content/uploads/2019/10/how-design-thinking-transforming-learning-experience-free-ebook.jpg "
            alt=" "
          />
        </div>
        <div className="text">
          <div className="card1">Learn from the Best </div>
          <div className="card2"> The best is yet to come</div>
          <div className="card3">
            {" "}
            <Button stylecolor="blue" name="Click to explore" />{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
