import React from 'react';

function ButtonElement(props) {
  return (
    <button onClick={props.handleVisibility}>
      {props.visible ? 'Ocultar' : 'Mostrar'}
    </button>
  );
}

export default ButtonElement;