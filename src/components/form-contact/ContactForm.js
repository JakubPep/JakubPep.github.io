import React, { useState } from "react";
import {
  FormConsentContainer,
  FormContainer,
  FormDataContainer,
  FormMessageContainer,
} from "../../styledComponents/contactForm.styled";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "https://formsubmit.co/kontakt@psycho-pracownia.pl";

    try {
      const formData = new FormData(e.target);

      setIsLoading(true); //włącz animację ładowania

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response;
      console.log("Odpowiedź FormSubmit.co:", data);

      setIsLoading(false); // wyłącz animację ładowania

      if (response.ok) {
        setIsSent(true);
        console.log("Formularz został prawidłowo przesłany!");
      } else {
        setIsSent(false);
        console.log("Błąd w przetwarzaniu formularza:", response.statusText);
      }
    } catch (error) {
      console.error("Błąd w czasie wysyłania formularza:", error);
      setIsLoading(false); // wyłącz animację ładowania
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <h2 className="section-title">Zapraszam do kontaktu!</h2>
        <input
          type="hidden"
          name="_subject"
          value="Nowa wiadomość z formularza!"
        />
        <input type="hidden" name="_captcha" value="false"></input>
        <FormDataContainer>
          <input type="text" name="Imie" placeholder="Imię*" required />
          <input type="email" name="Email" placeholder="E-mail*" required />
          <input type="tel" name="Tel" placeholder="Numer telefonu*" required />
        </FormDataContainer>
        <FormMessageContainer>
          <textarea name="message" placeholder="Wiadomość" />
        </FormMessageContainer>
        <FormConsentContainer>
          <span>
            Administratorem danych jest firma "Pracownia Psychologii i
            Psychodietetyki Dominika Szałkowska". Szczegółowe informacje
            odnośnie przetwarzania danych można znaleźć w
            <a
              target="_blanc"
              href="https://docs.google.com/document/d/1h0IbyrueqdLlAnAED_dWk5cI54to4s69Wql7I0JSa3w/edit?fbclid=IwAR1mCuqsdQ2Zu1sRw4jiBJLhqRgys5Yyn6rNEbj9ba25UdhUpdEABR3MBpA&pli=1"
            >
              {" "}
              polityce prywatności
            </a>
            .
          </span>
          <br />
          <div>
            <label>
              <input type="checkbox" name="zgoda" required />
              <span className="checkmark"></span>
              Akceptuję zasady przetwarzania danych według polityki prywatności
              i wyrażam zgodę na kontakt telefoniczny i/lub mailowy.
            </label>
          </div>
        </FormConsentContainer>
        <button
          type="submit"
          disabled={isLoading || isSent}
          className={`contact-form__button ${
            isSent ? "contact-form__sent" : ""
          }`}
        >
          {isLoading ? "" : isSent ? "Przesłano" : "Prześlij"}
          {isLoading && <div className="loader"></div>}
        </button>
      </FormContainer>
    </form>
  );
};

export default ContactForm;
