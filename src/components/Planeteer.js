import React, { useState } from "react";

function Planeteer({ planeteers }) {

  const {name, pictureUrl, bio, quote, twitter, fromUSA, born } = planeteers;

  const [imageClicked, setImageClicked] = useState(false)

  const handleClick = () => {
    setImageClicked(!imageClicked)
  }

  const age = (new Date().getFullYear())-born

  return (
    <li className="cards__item">
      <div className="card">
        <img
          onClick={handleClick}
          src={pictureUrl}
          alt={name}
          className="card__image"
        />
        <div className="card__content">
          <div className="card__title">{name}</div>
          <p className="card__text">{imageClicked ? quote : bio}</p>
          <div className="card__detail">
            <p>{twitter}</p>
            <p>Age: {age}</p>
            <p>
              {fromUSA ? 'USA-based' : 'Working overseas'}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}

export default Planeteer;
