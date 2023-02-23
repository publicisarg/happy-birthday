import React from 'react';
import { useState } from 'react';
import { Capas } from './capas';
import { ItemSvg } from './item';
import ListElements from './ListElements';

function Canvas() {
   const [mostrarElemento, setMostrarElemento] = useState(false);

  const handleClick = () => {
    setMostrarElemento(!mostrarElemento);
  };
  const elements = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    
    <>
    <Capas onClick={handleClick} mostrarElemento={mostrarElemento}></Capas>
    
    <div className="canvas border-4 border-sky-500">
    
      <div className="box border-solid border-2 border-sky-500">
      
     
        <div className='itemCanvas'>
        {mostrarElemento &&
        <ItemSvg/>
        
        }


          </div>
       
          
        <div className="absolute inset-y-0 pointer-events-none dragsz" ><div className="drag2 absolute z-10 top-1/2 left-0 p-2 -mt-6 hidden demo-sm:flex items-center justify-center pointer-events-auto cursor-ew-resize"  draggable="false"><div className="w-1.5 h-8 bg-slate-500/60 rounded-full"></div></div></div>
     </div>
     
    </div>
   
    </>
  )
}

export default Canvas

