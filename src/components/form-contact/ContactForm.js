import React from "react";
import {
  FormConsentContainer,
  FormContainer,
  FormDataContainer,
  FormMessageContainer,
} from "../../styledComponents/contactForm.styled";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const endpoint = "https://formsubmit.co/kontakt@psycho-pracownia.pl";

    try {
      const formData = new FormData(e.target);

      const response = await fetch(endpoint, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log("Odpowiedź FormSubmit.co:", data);

      if (response.ok) {
        console.log("Formularz został prawidłowo przesłany!");
      } else {
        console.log("Błąd w przetwarzaniu formularza:", response.statusText);
      }
    } catch (error) {
      console.error("Błąd w czasie wysyłania formularza:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormContainer>
        <input
          type="hidden"
          name="_subject"
          value="Nowa wiadomość z formularza!"
        />
        <FormDataContainer>
          <input type="text" name="Imie" placeholder="Imię" required />
          <input type="email" name="Email" placeholder="Email" required />
          <input type="tel" name="Tel" placeholder="Numer telefonu" required />
        </FormDataContainer>
        <FormMessageContainer>
          <textarea name="message" placeholder="Wiadomość" />
        </FormMessageContainer>
        <FormConsentContainer>
          <input type="checkbox" name="zgoda" required />
          <label>
            Akceptuję zasady przetwarzania danych według polityki prywatności
          </label>
        </FormConsentContainer>
        <button type="submit">Wyślij</button>
      </FormContainer>
    </form>
  );
};

export default ContactForm;
