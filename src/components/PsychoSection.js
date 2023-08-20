import React from "react";
import brainPhoto from "../images/brain-photo.png";
import forkPhoto from "../images/fork-photo.png";
import { CirclePhoto } from "../styledComponents/circlePhoto.styled";
import {
  DescriptionContainer,
  PsychoElement,
} from "../styledComponents/psycho.styled";
import { COLORS } from "../Vars";

const PsychoSection = () => {
  return (
    <>
      <PsychoElement>
        <DescriptionContainer>
          <CirclePhoto
            photoUrl={forkPhoto}
            width="22vw"
            height="22vw"
            borderColor={COLORS.light_pink}
            borderWidth="3px"
          />
          <div>
            <h2 className="section-title right">
              Konsultacje psychodietetyczne
            </h2>
            <p>
              Spotkania dotyczą Twoich doświadczeń związanych z odżywianiem się.
            </p>
            <p>Konsultacje mogą pomóc Ci, jeśli:</p>
            <ul>
              <li>pragniesz odzyskać spokój i radość z jedzenia;</li>
              <li>
                nie odpowiada Ci przestrzeganie restrykcyjnych zasad diet;
              </li>
              <li>zdarza Ci się jeść pod wpływem silnych emocji lub stresu;</li>
              <li>doświadczasz zaburzeń odżywiania;</li>
              <li>negatywnie postrzegasz swoje ciało;</li>
              <li>potrzebujesz zmiany swoich nawyków żywieniowych;</li>
              <li>oczekujesz długotrwałych efektów.</li>
            </ul>
          </div>
        </DescriptionContainer>
      </PsychoElement>

      <PsychoElement>
        <DescriptionContainer className="reverse">
          <CirclePhoto
            photoUrl={brainPhoto}
            width="22vw"
            height="22vw"
            borderColor={COLORS.light_pink}
            borderWidth="3px"
          />
          <div>
            <h2 className="section-title">Konsultacje psychologiczne</h2>
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
              <li>
                brakuje Ci sił i chęci do wykonywania codziennych czynności;
              </li>
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

      {/* Konsultacje dietetyczne - MOŻE KIEDYŚ WROCA */}

      {/* <PsychoElement>
        <DescriptionContainer className="reverse">
          <CirclePhoto
            photoUrl={dietPhoto}
            width="22vw"
            height="22vw"
            borderColor={COLORS.light_pink}
            borderWidth="3px"
          />
          <div>
            <h2 className="section-title">Konsultacje dietetyczne</h2>
            <p>
              Spotkania, których celem jest zniwelowanie dolegliwości związanych
              z różnorodnymi problemami zdrowotnymi, jakich doświadczasz.
            </p>
            <p>Konsultacje mogą pomóc Ci, jeśli chorujesz na:</p>
            <ul>
              <li>IBS - zespół jelita drażliwego;</li>
              <li>chorobę refluksową;</li>
              <li>nadciśnienie tętnicze;</li>
              <li>cukrzycę;</li>
              <li>celiakię;</li>
              <li>nowotwory;</li>
              <li>PCOS;</li>
              <li>miażdżycę;</li>
              <li>osteoporozę;</li>
              <li>sarkopenię;</li>
              <li>dnę moczanową;</li>
              <li>choroby nerek;</li>
              <li>anemię; </li>
              <li>choroby tarczycy - niedoczynność, nadczynność, Hashimoto</li>
            </ul>
            <p>
              oraz jeśli jesteś sportowcem, który potrzebuje wsparcia
              dietetycznego.
            </p>
          </div>
        </DescriptionContainer>
      </PsychoElement> */}
    </>
  );
};

export default PsychoSection;
