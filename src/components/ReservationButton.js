import React from "react";
import { ReservationCircle } from "../styledComponents/reservationButton.styled";

const ReservationButton = () => {
  return (
    <>
      <ReservationCircle>
        <a
        href="https://psycho-pracownia.booksy.com"
        target="_blank"
        rel="noreferrer noopener">
          <h3>Umów wizytę</h3>
        </a>
      </ReservationCircle>
    </>
  );
};

export default ReservationButton;
