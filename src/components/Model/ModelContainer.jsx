import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {FaWindowClose} from 'react-icons/fa' 

function ModelContainer({ isOpen, onClose }) {
  return (
    <Container>
      <ModelContent
        initial={{ y: '-100vh', scale: 0 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: '-100vh', scale: 0 }}
      >
        <ModalHeader>
          <ModalTitle>Setting</ModalTitle>
          <ModalCloseButton onClick={onClose}>
            <FaWindowClose fontSize='5rem'/>
          </ModalCloseButton>
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
const ModelContent = styled(motion.div)`
  width: 60rem;
  height: 40rem;
  background-color: white;
`;
const ModalHeader = styled.div`
  color: black;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1ps solid;
`;
const ModalTitle = styled.div`
  font-size: 5rem;
`;
const ModalCloseButton = styled.button`
all: unset
`;
const ModalBody = styled.div``;
