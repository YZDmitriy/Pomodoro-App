import React from 'react';
import styled from 'styled-components';

function Clock(props) {
  return (
    <ClockContainer>
      <TimerText>
        05:00
      </TimerText>
    </ClockContainer>
  );
}

export default Clock;

const ClockContainer = styled.div`

`;

const TimerText = styled.div`

`;

