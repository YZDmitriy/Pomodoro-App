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
`;
const ModelContent = styled.div``;
const ModalHeader = styled.div``;
const ModalTitle = styled.div``;
const ModalCloseButton = styled.button``;
const ModalBody = styled.div``;
