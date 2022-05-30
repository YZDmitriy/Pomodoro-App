import React from 'react';
import Backdrop from './Backdrop';
import ModelContainer from './ModelContainer';

function Model(props) {
  return (
    <div>
      <Backdrop/>
      <ModelContainer/>
    </div>
  );
}

export default Model;
