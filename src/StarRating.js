import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt, faStar as faStarEmpty } from '@fortawesome/free-solid-svg-icons';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - Math.ceil(rating);

  return (
    <div className="star-rating">
      {[...Array(fullStars)].map((_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} className="star full" />
      ))}
      {halfStar && <FontAwesomeIcon icon={faStarHalfAlt} className="star half" />}
      {[...Array(emptyStars)].map((_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faStarEmpty} className="star empty" />
      ))}
    </div>
  );
}

export default StarRating;
