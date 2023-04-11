import React from "react";
import {
  Offer,
  OfferListContainer,
} from "../../styledComponents/offerStyled/offerSection.styled";
import {
  OfferDescr,
  OfferDescrContainer,
} from "../../styledComponents/offerStyled/offerActive.styled";

const OfferSection = (props) => {
  return (
    <>
      <OfferDescrContainer>
        <OfferListContainer>
          <h3 className="section-title">Oferta</h3>
          <Offer>
            <p className="offer-name">konsultacja psychologiczna</p>
            {/* <OfferDescr>
              <h4>{props.offerDescrTitle}</h4>
              <p>Lorem qui laborum exercitation officia consequat ea.</p>
              <p>
                Cillum magna consequat anim esse Lorem esse deserunt officia
                consequat. Sit dolore deserunt ea ipsum eiusmod ipsum cillum
                aliqua aute sunt ipsum labore minim. Quis eu veniam tempor
                dolore do magna voluptate. Et et elit aliquip tempor deserunt
                enim cillum magna occaecat minim irure irure sunt. Lorem non non
                duis amet proident minim veniam. Commodo labore consequat esse
                elit deserunt quis.
              </p>
            </OfferDescr> */}
          </Offer>
          
          
        </OfferListContainer>
        <OfferDescr>
              <h4>{props.offerDescrTitle}</h4>
              <p>Lorem qui laborum exercitation officia consequat ea.</p>
              <p>
                Cillum magna consequat anim esse Lorem esse deserunt officia
                consequat. Sit dolore deserunt ea ipsum eiusmod ipsum cillum
                aliqua aute sunt ipsum labore minim. Quis eu veniam tempor
                dolore do magna voluptate. Et et elit aliquip tempor deserunt
                enim cillum magna occaecat minim irure irure sunt. Lorem non non
                duis amet proident minim veniam. Commodo labore consequat esse
                elit deserunt quis.
              </p>
            </OfferDescr>
      </OfferDescrContainer>
    </>
  );
};

export default OfferSection;
