import React from 'react';
import styled from 'styled-components';
import { COLORS } from '../../Vars';

const Animation = styled.div`
display: flex;
justify-content: center;
margin-top: -30px;
@keyframes pulse {
    from {
        opacity: 1;
        transform: scale(1);
    }
    to {
        opacity: .25;
        transform: scale(.75);
    }
}
.pulse-container {
  width: 120px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pulse-bubble {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${COLORS.dark_pink};
}

.pulse-bubble-1 {
    animation: pulse .4s ease 0s infinite alternate;
}
.pulse-bubble-2 {
    animation: pulse .4s ease .2s infinite alternate;
}
.pulse-bubble-3 {
    animation: pulse .4s ease .4s infinite alternate;
}
`;

const Loader = () => {
  return (
      <Animation className="spinner-box">
        <div className="pulse-container">
          <div className="pulse-bubble pulse-bubble-1"></div>
          <div className="pulse-bubble pulse-bubble-2"></div>
          <div className="pulse-bubble pulse-bubble-3"></div>
        </div>
      </Animation>
  );
};

export default Loader;
