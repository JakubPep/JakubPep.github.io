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
            "Porozmawiamy o doświadczanych przez Ciebie trudnościach w zakresie funkcjonowania psychologicznego.",
          secondP: "Określimy, czego dotyczy problem.",
          thirdP: "Odpowiemy na nurtujące Cię pytania.",
          fourthP:
            "Jeśli po pierwszym spotkaniu uznasz, że chcesz kontynuować współpracę, ustalimy, jak będzie ona wyglądać oraz określimy jej cel.",
          time: "50 minut",
          price: "140 zł",
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
          firstP: "Przeanalizujemy Twoją sytuację związaną z odżywianiem się.",
          secondP:
            "Przyjrzymy się schematom i nawykom jedzeniowym w jakich funkcjonujesz.",
          thirdP: "Określimy, czego dotyczy problem.",
          fourthP:
            "Jeśli po pierwszym spotkaniu uznasz, że chcesz kontynuować współpracę, ustalimy, jak będzie ona wyglądać oraz określimy jej cel.",
          time: "50 minut",
          price: "140 zł",
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
          title:
            "W przypadku dłuższej współpracy, masz możliwość wykupienia pakietu spotkań:",
          firstP: "4 konsultacje",
          secondP: "// do wykorzystania w ciągu 60 dni //",
          price: "500 zł",
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
          title:
            "W przypadku dłuższej współpracy, masz możliwość wykupienia pakietu spotkań:",
          firstP: "6 konsultacji",
          secondP: "//do wykorzystania w ciągu 90 dni//",
          price: "700 zł",
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
          title: "Warsztaty i szkolenia",
          firstP:
            "Osoby/firmy zainteresowane ofertą warsztatów i szkoleń z zakresu psychologii zapraszam do kontaktu.",
          price: "ustalany indywidualnie",
          time: "ustalany indywidualnie",
        });
        if (activeOffer === "5") {
          setShowDetails(false);
          setActiveOffer("");
        } else {
          setShowDetails(true);
          setActiveOffer("5");
        }
        break;

        // DOTYCZY KONSULTACJI DIETETYCZNYCH - MOŻE JESZCZE KIEDYŚ WROCI
      // case "6":
      //   setDetails({
      //     title: "Na tym spotkaniu:",
      //     firstP: "Przeprowadzimy szczegółowy wywiad żywieniowy.",
      //     secondP: "Przeanalizujemy problem zdrowotny, z jakim się zmagasz i dopasujemy zalecenia, które pomogą Ci się z nim uporać.",
      //     thirdP: "Stworzymy plan dietetyczny dostosowany do Twoich potrzeb.",
      //     fourthP:
      //       "Jeśli po pierwszym spotkaniu uznasz, że chcesz kontynuować współpracę, ustalimy, jak będzie ona wyglądać oraz określimy jej cel.",

      //     price: "140 zł",
      //     time: "50 minut",
      //   });
      //   if (activeOffer === "6") {
      //     setShowDetails(false);
      //     setActiveOffer("");
      //   } else {
      //     setShowDetails(true);
      //     setActiveOffer("6");
      //   }
      //   break;


      case "7":
        setDetails({
          title: "Na tym spotkaniu:",
          firstP: "Porozmawiamy o Waszych trudnościach i konfliktach.",
          secondP: "Zadbamy o Wasze potrzeby celem lepszego zrozumienia w relacji.",
          thirdP: "Wypracujemy odpowiednie porozumienie między Wami i poszukamy kompromisów.",
          fourthP: "Określimy czego dotyczy problem.",
          fifthP:
            "Jeśli po pierwszym spotkaniu uznacie, że chcecie kontynuować współpracę, ustalimy, jak będzie ona wyglądać oraz określimy jej cel.",

          price: "180 zł",
          time: "50 minut",
        });
        if (activeOffer === "7") {
          setShowDetails(false);
          setActiveOffer("");
        } else {
          setShowDetails(true);
          setActiveOffer("7");
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
        {showDetails && windowWidth <= "650" && activeOffer === value && (
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
          {details.time && (
            <p className="descr-time">
              <span className="bold">Czas trwania: </span>
              {details.time}
            </p>
          )}
          {details.price && (
            <p className="descr-price">
              <span className="bold">Koszt: </span>
              {details.price}
            </p>
          )}
        </OfferDetailsContainer>
      </>
    );
  };

  return (
    <>
      <OfferDescrContainer>
        <OfferListContainer>
          <h2 className="section-title">Oferta</h2>
          <Offer value={"2"} offerName="Konsultacja psychodietetyczna" />
          <Offer value={"1"} offerName="Konsultacja psychologiczna" />
          {/* <Offer value={"6"} offerName="Konsultacja dietetyczna" /> */}
          <Offer value={"7"} offerName="Konsultacja dla par" />
          <Offer value={"3"} offerName="Pakiet 4 konsultacji" />
          <Offer value={"4"} offerName="Pakiet 6 konsultacji" />
          <Offer value={"5"} offerName="Warsztaty i szkolenia" />
        </OfferListContainer>
        {showDetails && windowWidth > "650" && <OfferDetails />}
      </OfferDescrContainer>
    </>
  );
};

export default OfferSection;
