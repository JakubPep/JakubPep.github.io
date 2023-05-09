import React from "react";
import { CirclePhoto } from "../styledComponents/circlePhoto.styled";
import { DescriptionContainer, PsychoElement } from "../styledComponents/psycho.styled";
import { COLORS } from "../Vars";
import brainPhoto from "../images/brain-photo.png";
import forkPhoto from "../images/fork-photo.png";

const PsychoSection = () => {
  return (
    <>
      <PsychoElement>
        <DescriptionContainer className="reverse">
        <CirclePhoto
          className="photo-right"
          photoUrl={brainPhoto}
          width="22vw"
          height="22vw"
          borderColor={COLORS.light_pink}
          borderWidth="3px"
        />
        <div>
        <h3 className="section-title">Konsultacje psychologiczne</h3>
          <p>
          Spotkania koncentrują się na pracy z przeżywanymi trudnościami i
          problemami.
        </p>
          <p>Konsultacje mogą pomóc Ci, jeśli:</p>
        <ul>
          <li>
            długotrwale doświadczasz takich emocji, jak: drażliwość, złość,
            smutek czy lęk;
          </li>
          <li>brakuje Ci sił i chęci do wykonywania codziennych czynności;</li>
          <li>masz do czynienia z przewlekłym stresem;</li>
          <li>
            nie odczuwasz satysfakcji ze swojego życia lub relacji z innymi;
          </li>
          <li>doświadczasz zaburzeń snu;</li>
          <li>brakuje Ci motywacji do podejmowania nowych działań;</li>
          <li>jesteś w trudnej dla Ciebie sytuacji życiowej;</li>
          <li>potrzebujesz rozmowy pełnej empatii i zrozumienia.</li>
        </ul>
        </div>
        </DescriptionContainer>
      </PsychoElement>

      <PsychoElement>
        <DescriptionContainer >
        <CirclePhoto
          className="photo-right"
          photoUrl={forkPhoto}
          width="22vw"
          height="22vw"
          borderColor={COLORS.light_pink}
          borderWidth="3px"
        />
        <div>
        <h3 className="section-title right">Konsultacje psychodietetyczne</h3>
        <p>
          Spotkania dotyczą Twoich doświadczeń związanych z odżywianiem się.
        </p>
        <p>Konsultacje mogą pomóc Ci, jeśli:</p>
        <ul>
          <li>pragniesz odzyskać spokój i radość z jedzenia;</li>
          <li>nie odpowiada Ci przestrzeganie restrykcyjnych zasad diet;</li>
          <li>zdarza Ci się jeść pod wpływem silnych emocji lub stresu;</li>
          <li>doświadczasz zaburzeń odżywiania;</li>
          <li>negatywnie postrzegasz swoje ciało;</li>
          <li>potrzebujesz zmiany swoich nawyków żywieniowych;</li>
          <li>oczekujesz długotrwałych efektów.</li>
        </ul>
        </div>
        </DescriptionContainer>
      </PsychoElement>
    </>
  );
};

export default PsychoSection;
