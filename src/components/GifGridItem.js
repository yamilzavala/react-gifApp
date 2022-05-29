import React from "react";

const GifGridItem = ({ url, title, id }) => {
  return (
    <div className="card animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};

export default GifGridItem;
