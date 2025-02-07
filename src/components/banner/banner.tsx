import React from 'react';
import './banner.scss';

const Banner = ({ banner }): JSX.Element => {
  return (
    <div className="HomeMainContainer">
      <div className="banner">
        <img src={banner.image} alt={banner.title} />
        <div className="banner-content">
          <h1>
            <strong>{banner.title}</strong>
          </h1>
          <p>{banner.subtitle}</p>
          <a href={banner.href} className="banner-button">
            {banner.button}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
