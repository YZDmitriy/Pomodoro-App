import React from 'react';
import styled from 'styled-components';

function ModelContainer(props) {
  return (
    <Container>
      <ModelContent>
        <ModalHeader>
          <ModalTitle>ModalTitle</ModalTitle>
          <ModalCloseButton>X</ModalCloseButton>
        </ModalHeader>
        <ModalBody></ModalBody>
      </ModelContent>
    </Container>
  );
}

export default ModelContainer;

const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  z-index: 150;
`;
const ModelContent = styled.div`
  width: 60rem;
  height: 40rem;
  background-color: white;

`;
const ModalHeader = styled.div``;
const ModalTitle = styled.div``;
const ModalCloseButton = styled.button``;
const ModalBody = styled.div``;
