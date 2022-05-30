import { useState } from 'react';
import styled from 'styled-components';

function CurcularProgress(props) {
  const [progress, setProrgess] = useState(99);

  return (
    <OuterCircle progress={progress}>
      <InnerCircle></InnerCircle>
    </OuterCircle>
  );
}

export default CurcularProgress;

const OuterCircle = styled.div`
  width: 35rem;
  height: 35rem;
  background: #b34444;

  border-radius: 50%;
  display: grid;
  place-items: center;
  background: conic-gradient(
    red ${({ progress }) => progress}%,
    transparent ${({ progress }) => progress}%
  );
`;

const InnerCircle = styled.div`
  width: 32rem;
  height: 32rem;
  background: white;
  border-radius: 50%;
  display: grid;
  place-items: center;
`;
