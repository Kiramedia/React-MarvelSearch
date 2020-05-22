import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ heroeName, srcImage, id }) => {
    return (<Link className="o-card-link" to={`/character/${id}`}>
        <div className="o-card-container">
            <img src={srcImage} alt={`Imagen de ${heroeName}`}></img>
            <h3>{heroeName}</h3>
        </div>
    </Link>);
};

export default Card;