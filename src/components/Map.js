import React from "react";
import { Map } from "../styledComponents/map.styled";

const MapElement = () => {
  return (
    <>
      <Map>
        <iframe
          title="Pracownia Psychologii i Psychodietetyki"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2362.2694080652823!2d17.571371476651468!3d53.69564534853071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47024668239f92d9%3A0x6845cc425f357e7c!2sGda%C5%84ska%2026%2C%2089-620%20Chojnice!5e0!3m2!1spl!2spl!4v1682445315729!5m2!1spl!2spl"
          className="map-embeed"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Map>
    </>
  );
};

export default MapElement;
