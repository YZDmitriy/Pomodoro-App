import React from 'react';
import Backdrop from './Backdrop';
import ModelContainer from './ModelContainer';

function Model({ isOpen }) {
  return (
    <>
      {isOpen &
      (
        <>
          <Backdrop />
          <ModelContainer />
        </>
      )}
    </>
  );
}

export default Model;
