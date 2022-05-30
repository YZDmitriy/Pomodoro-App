import styled from 'styled-components';
import CurcularProgress from './CurcularProgress/CurcularProgress';

function Timer(props) {
  return <TimerContainer>
    <CurcularProgress/>
  </TimerContainer>;
}

export default Timer;

const TimerContainer = styled.div`
  width: 45rem;
  height: 45rem;
  background: white;
  margin: 2rem auto;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
