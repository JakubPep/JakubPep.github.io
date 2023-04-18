import React from "react";
import { useState } from "react";
import { OfferListContainer } from "../../styledComponents/offerStyled/offerSection.styled";
import { OfferDescrContainer } from "../../styledComponents/offerStyled/offerActive.styled";

const OfferSection = () => {
  const [details, setDetails] = useState();

  

  const action = (e) => {
    switch (e.target.value) {
      case '1':
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "I tak się to życie toczy. No.",
          thirdP: "I tak się to życie toczy. No.",
          fourthP: "I tak się to życie toczy. No.",
          fifthP: "I tak się to życie toczy. No.",
        })
        break;
      case '2':
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "124124czy. No.",
          thirdP: "I41421",
          fourthP: "123123",
          fifthP: "123",
        }); break;
      case '3':
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "I tak się to życie toczy. No.",
          thirdP: "I tak się to życie toczy. No.",
          fourthP: "I tak się to życie toczy. No.",
          fifthP: "I tak się to życie toczy. No.",
        }); break;
      case '4':
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "I tak się to życie toczy. No.",
          thirdP: "I tak się to życie toczy. No.",
          fourthP: "I tak się to życie toczy. No.",
          fifthP: "I tak się to życie toczy. No.",
        }); break;

        default: {
            setDetails({});
            break;
        } 
    }
  };

  const Offer = ({ offerName, value }) => {
    return (
      <>
        <button className="single-offer" onClick={action} value={value}>{offerName}</button>
      </>
    );
  };

  return (
    <>
      <OfferDescrContainer>
        <OfferListContainer>
          <h3 className="section-title">Oferta</h3>
          <Offer
          
            value={'1'}
            offerName="Konsultacja psychologiczna"
          />
          <Offer offerName="Jadłospis 7-dniowy"
          value={'2'} />
          <Offer offerName="Konsultacja psychodietetyczna" />
          <Offer offerName="Warsztaty o zdrowym odżywianiu" />
          <Offer offerName="Lekcja dla najmłodszych" />
        </OfferListContainer>
        {details && (
        <>
        <div className="offer-descr">
          <p className="descr-title">{details.title}</p>
          <p className="descr-paragraph">{details.firstP}</p>
          <p className="descr-paragraph">{details.secondP}</p>
          <p className="descr-paragraph">{details.thirdP}</p>
          <p className="descr-paragraph">{details.fourthP}</p>
          <p className="descr-paragraph">{details.fifthP}</p>
        </div>
        </>)}
      </OfferDescrContainer>
    </>
  );
};

export default OfferSection;
