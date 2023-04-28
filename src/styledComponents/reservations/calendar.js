import styled from 'styled-components';

export const CalendarComponent = styled.div`
  text-align: center;
  .calendar-grid {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 5px;
    margin-top: 15px;
  }
  .calendar-day {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid;
    width: 50px;
    height: 50px;
    cursor: pointer;
    background-color: #fff;
    transition: .2s ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 4px 4px 10px #888;
    }
    &:focus {
        background-color: blue;
        color: white;
    }
    .day-number {
      position: absolute;
      top: 10px;
      left: 0;
      background-color: transparent;
      width: 100%;
      height: 100%;
        font-weight: 700;
        z-index: 2;
    }
    .day-name {
      position: relative;
      top: 10px;
        font-size: .5rem;
    }
  }
`;

export const ControlBtns = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    cursor: pointer;
    padding: 6px 4px;
    transition: .2s ease-in-out;
    &:hover {
      transform: scale(1.05);
      box-shadow: 4px 4px 10px #888;
    }
  }
`

export const ConfirmBtn = styled.button`
cursor: pointer;
`
