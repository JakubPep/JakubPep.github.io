import React, { useEffect, useState } from 'react';
import {
  PopupBox,
  PopupFormContainer,
  PopupExit,
  PopupForm,
} from '../../styledComponents/reservations/popup';
import Calendar from './Calendar';

const Popup = ({ setTrigger }) => {
  const [calendar, setCalendar] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [clientData, setClientData] = useState({});
  const [nextButton, setNextButton] = useState(false);

  const clientDataHandler = (e) => {
   const { name, value } = e.target;
   setClientData({ ...clientData, [name]: value});
  }

  useEffect(() => {
    if((clientData.firstName && clientData.lastName && clientData.email && clientData.phone) !== undefined) {
      setNextButton(true)
    } else {
      setNextButton(false)
    }
  }, [clientData])

  const secondStep = () => {
    if (!calendar) {
      return (
        <>
          <input onChange={clientDataHandler} type="text" name="firstName" id="" placeholder="Imię" />
          <input onChange={clientDataHandler} type="text" name="lastName" id="" placeholder="Nazwisko" />
          <input onChange={clientDataHandler} type="email" name="email" id="" placeholder="e-mail" />
          <input onChange={clientDataHandler} 
            type="number"
            name="phone"
            id=""
            placeholder="numer telefonu"
          />
          {nextButton &&  <button
            onClick={(e) => {
              e.preventDefault();
              setCalendar(true)
            }}
          >
            wybierz termin
          </button>}
        </>
      );
    }
    if (calendar && !confirm) {
      return (
          <Calendar />
      );
    }
  };

  return (
    <>
      <PopupBox>
        <PopupFormContainer>
          <PopupExit onClick={setTrigger} />
          <PopupForm>{secondStep()}</PopupForm>
        </PopupFormContainer>
      </PopupBox>
    </>
  );
};

export default Popup;
