import React from "react";
import "./CharacterProfile.css";

const CharacterProfile = ({ heroeName, srcImage, description }) => {
    return (
        <div>
            <div className="o-character-profile">
                <img src={srcImage} alt={`Imagen de ${heroeName}`}></img>
                <div className="o-character-info">
                    <h1>{heroeName}</h1>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default CharacterProfile;