import React from "react";
import { useState } from "react";
import { OfferListContainer } from "../../styledComponents/offerStyled/offerSection.styled";
import {
  OfferDescrContainer,
  OfferDetailsContainer,
} from "../../styledComponents/offerStyled/offerActive.styled";
import { useWindowWidth } from "../../hooks/useWindowWidth";

const OfferSection = () => {
  const [details, setDetails] = useState();
  const [showDetails, setShowDetails] = useState(false);
  const [activeOffer, setActiveOffer] = useState("");
  const windowWidth = useWindowWidth();

  const action = async (e) => {
    switch (e.target.value) {
      case "1":
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "I tak się to życie toczy. No.",
          thirdP: "I tak się to życie toczy. No.",
          fourthP: "I tak się to życie toczy. No.",
          fifthP: "I tak się to życie toczy. No.",
        });
        if (activeOffer === "1") {
          setShowDetails(false);
          setActiveOffer("");
        } else {
          setShowDetails(true);
          setActiveOffer("1");
        }

        break;
      case "2":
        
        setDetails({
          title: "Na tym spotkaniu:",
          secondP: "Jednorazowe spotkanie stacjonarne lub online.",
          fourthP: "Czas trwania: 50 minut",
          fifthP: "Koszt: 140 zł",
        });
        if (activeOffer === "2") {
          setShowDetails(false);
          setActiveOffer("");
        } else {
          setShowDetails(true);
          setActiveOffer("2");
        }
        break;
      case "3":
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "I tak się to życie toczy. No.",
          thirdP: "I tak się to życie toczy. No.",
          fourthP: "I tak się to życie toczy. No.",
          fifthP: "I tak się to życie toczy. No.",
        });
        if (activeOffer === "3") {
          setShowDetails(false);
          setActiveOffer("");
        } else {
          setShowDetails(true);
          setActiveOffer("3");
        }
        break;
      case "4":
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "I tak się to życie toczy. No.",
          thirdP: "I tak się to życie toczy. No.",
          fourthP: "I tak się to życie toczy. No.",
          fifthP: "I tak się to życie toczy. No.",
        });
        if (activeOffer === "4") {
          setShowDetails(false);
          setActiveOffer("");
        } else {
          setShowDetails(true);
          setActiveOffer("4");
        }
        break;
      case "5":
        setDetails({
          title: "Na tym spotkaniu:",
          firstP:
            "In velit culpa magna eiusmod laboris anim non esse ipsum exercitation. Minim consectetur deserunt dolore sunt mollit excepteur minim eu aute. Occaecat non ex anim excepteur dolor commodo.",
          secondP: "I tak się to życie toczy. No.",
          thirdP: "I tak się to życie toczy. No.",
          fourthP: "I tak się to życie toczy. No.",
          fifthP: "I tak się to życie toczy. No.",
        });
        if (activeOffer === "5") {
          setShowDetails(false);
          setActiveOffer("");
        } else {
          setShowDetails(true);
          setActiveOffer("5");
        }
        break;

      default: {
        setActiveOffer("");
        setDetails({});
        setShowDetails(false);
        break;
      }
    }
  };

  const Offer = ({ offerName, value }) => {
    return (
      <>
        <button
          className={`single-offer ${
            activeOffer === value ? " single-offer--active" : ""
          }`}
          onClick={action}
          value={value}
        >
          {offerName}
        </button>
        {showDetails && windowWidth <= "760" && activeOffer === value && (
          <OfferDetails />
        )}
      </>
    );
  };

  const OfferDetails = () => {
    return (
      <>
        <OfferDetailsContainer className="offer-descr">
          <p className="descr-title">{details.title}</p>
          <p className="descr-paragraph">{details.firstP}</p>
          <p className="descr-paragraph">{details.secondP}</p>
          <p className="descr-paragraph">{details.thirdP}</p>
          <p className="descr-paragraph">{details.fourthP}</p>
          <p className="descr-paragraph">{details.fifthP}</p>
        </OfferDetailsContainer>
      </>
    );
  };

  return (
    <>
      <OfferDescrContainer windowWidth={windowWidth}>
        <OfferListContainer>
          <h3 className="section-title">Oferta</h3>
          <Offer value={"1"} offerName="Konsultacja psychologiczna"></Offer>
          <Offer value={"2"} offerName="Jadłospis 7-dniowy" />
          <Offer value={"3"} offerName="Konsultacja psychodietetyczna" />
          <Offer value={"4"} offerName="Warsztaty o zdrowym odżywianiu" />
          <Offer value={"5"} offerName="Lekcja dla najmłodszych" />
        </OfferListContainer>
        {showDetails && windowWidth > "760" && <OfferDetails />}
      </OfferDescrContainer>
    </>
  );
};

export default OfferSection;
