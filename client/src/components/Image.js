import React from 'react';

const Image = ({ image, imageClicked }) => {
  return (
    <img
      className="single-photo"
      src={image.urls.thumb}
      alt={image.description}
      onClick={() => imageClicked(image.id, image.urls.full)}
    />
  );
};

export default Image;
