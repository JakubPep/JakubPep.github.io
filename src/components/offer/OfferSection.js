import React from "react";
import { useState } from "react";
import { OfferListContainer } from "../../styledComponents/offerStyled/offerSection.styled";
import { OfferDescrContainer } from "../../styledComponents/offerStyled/offerActive.styled";

const OfferSection = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [offerDescrTitle, setOfferDescrTitle] = useState();
  const [offerDescrParagraph1, setOfferDescrParagraph1] = useState();
  const [offerDescrParagraph2, setOfferDescrParagraph2] = useState();
  const [offerDescrParagraph3, setOfferDescrParagraph3] = useState();
  const [offerDescrParagraph4, setOfferDescrParagraph4] = useState();

  const toggleDetails = (
    descrTitle,
    descrPara1,
    descrPara2,
    descrPara3,
    descrPara4
  ) => {
    setShowDetails(false);
    changeDescrTitle(descrTitle);
    setOfferDescrParagraph1(descrPara1);
    setOfferDescrParagraph2(descrPara2);
    setOfferDescrParagraph3(descrPara3);
    setOfferDescrParagraph4(descrPara4);
    setShowDetails(true);
  };

  const changeDescrTitle = (e) => {
    setOfferDescrTitle(e);
  };

  function Offer({
    offerName,
    descrTitle,
    descrPara1,
    descrPara2,
    descrPara3,
    descrPara4,
  }) {
    return (
      <>
        <div
          onClick={() =>
            toggleDetails(
              descrTitle,
              descrPara1,
              descrPara2,
              descrPara3,
              descrPara4
            )
          }
          className="single-offer"
        >
          <p className="offer-name">{offerName}</p>
        </div>
      </>
    );
  }

  function OfferDescr() {
    return (
      <>
        <div className="offer-descr">
          <h4>{offerDescrTitle}</h4>
          <p>{offerDescrParagraph1}</p>
          <p>{offerDescrParagraph2}</p>
          <p>{offerDescrParagraph3}</p>
          <p>{offerDescrParagraph4}</p>
        </div>
      </>
    );
  }

  return (
    <>
      <OfferDescrContainer>
        <OfferListContainer>
          <h3 className="section-title">Oferta</h3>
          <Offer
            offerName="Konsultacja psychologiczna"
            descrTitle="Na tym spotkaniu:"
            descrPara1="In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo."
            descrPara2="I tak się to życie toczy. No."
            descrPara3="I tak się to życie toczy. No."
            descrPara4="I tak się to życie toczy. No."
          />
          <Offer
            offerName="Jadłospis 7-dniowy"
            descrTitle="Dla Ciebie:"
            descrPara1="Sporządzimy jadłospis z przykładowymi posiłkami na 7 dni."
            descrPara2="Dzięki niemu nie będzie problemu z brakiem pomysłu na posiłki."
          />
          <Offer offerName="Konsultacja psychodietetyczna" />
          <Offer offerName="Warsztaty o zdrowym odżywianiu" />
          <Offer offerName="Lekcja dla najmłodszych" />
        </OfferListContainer>
        {showDetails && <OfferDescr />}
      </OfferDescrContainer>
    </>
  );
};

export default OfferSection;
