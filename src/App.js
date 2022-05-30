import { useState } from 'react';
import styled from 'styled-components';
import Model from './components/Model/Model';
import Tags from './components/Tags/Tags';
import Timer from './components/Timer/Timer';
import { FaCog } from 'react-icons/fa';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Model isOpen={isOpen} onClose={onClose} />
      <Title>POMODORO</Title>
      <Tags />
      <Timer />
      <CogIcon onClick={onOpen}>
        <FaCog />
      </CogIcon>
    </>
  );
}

export default App;

const Title = styled.h1`
  font-size: 6rem;
  padding: 2rem 0;
  text-align: center;
`;

const CogIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 4rem;
`;
