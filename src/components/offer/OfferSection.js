import React from "react";
import {
  Offer,
  OfferList,
  OfferListContainer,
} from "../../styledComponents/offerStyled/offerSection.styled";

const OfferSection = () => {
  return (
    <>
      <OfferListContainer>
        <h3 className="section-title">Oferta</h3>
          <Offer>
            <p className="offer-name">konsultacja psychologiczna</p>
          </Offer>
          <Offer>
           <p>Jadłospis 7-dniowy</p>
           </Offer>
          <Offer>
            <p>Konsultacja Psychodietetyczna</p>
          </Offer>
          <Offer />
          <Offer />
          <Offer />
      </OfferListContainer>
    </>
  );
};

export default OfferSection;
