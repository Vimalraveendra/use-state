import React from "react";
import "./Card.css";

const Card = ({ children }) => {
  console.log("children", children);
  return <div className="card">{children}</div>;
};

export default Card;
