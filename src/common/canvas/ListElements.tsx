import React, { useState } from 'react';
import ButtonElement from './ButtonElement';

function ListElements(props) {
  const [elementVisibility, setElementVisibility] = useState(props.elements.map(() => false));

  const handleVisibility = (index) => {
    const newElementVisibility = [...elementVisibility];
    newElementVisibility[index] = !newElementVisibility[index];
    setElementVisibility(newElementVisibility);
  }

  return (
    <div>
      {props.elements.map((element, index) => (
        <div key={index}>
          <ButtonElement handleVisibility={() => handleVisibility(index)} visible={elementVisibility[index]} />
          {elementVisibility[index] && <p>{element}</p>}
        </div>
      ))}
    </div>
  );
}

export default ListElements;