import React, { useState } from 'react'
import Draggable from 'react-draggable';
import { RxEyeOpen, RxEyeClosed } from "react-icons/rx";
import { Rnd } from 'react-rnd';
import ButtonElement from './ButtonElement';

export const Capas = ({ onClick, mostrarElemento }) => {
    const elements = ['Elemento 1', 'Elemento 2', 'Elemento 3'];
    const [elementVisibility, setElementVisibility] = useState(elements.map(() => false));


    const handleVisibility = (index) => {
      const newElementVisibility = [...elementVisibility];
      newElementVisibility[index] = !newElementVisibility[index];
      setElementVisibility(newElementVisibility);
    }
  
    return (
        <div className='z-50 absolute drop-shadow-2xl'>
      
        <Draggable  defaultPosition={{x: 500, y: 500}}>
        
        <section className='max-w-3xl max-h-3xl bg-[#535353] z-50 w-60'>
            <header className=' border-solid  border-gray-800 pt-[10px]'>
                <span className='text-bold text-white text-lg bg-[#6b6b6b] p-4 rounded-t-lg pb-[5px]'>Capas</span>
            </header>
            <article>
                <ul>
                {/* {elements.map((element, index) => (
        <div key={index}>
         <ButtonElement handleVisibility={() => handleVisibility(index)} visible={elementVisibility[index]} />
        </div>
      ))} */}


                    <li className='border-solid  border-2 border-gray-800 bg-[#535353]  w-60'>
                        
                    <button onClick={onClick} className="flex  w-60">
       
                        <label className="checkbox-icon">
                            
                           
                                <span className="icon">
                                 {mostrarElemento ? <RxEyeOpen  color='#e7e6e6'></RxEyeOpen>:  <RxEyeClosed color='#e7e6e6'></RxEyeClosed> }  
                               
                                </span>
                                
                        </label>
                        <label htmlFor="active" className='bg-[#6b6b6b] p-4  text-white w-full'>Capa 1 </label>
 
                        </button>
                    </li>
                    <li>
                    </li>
                </ul>
            </article>
        </section>
        </Draggable>
     
        </div>
    )
}
