import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
  } from "@material-tailwind/react";
import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
   
function CardMenu() {
    return (
      <ul className="text-center px-4">
        <li className="self-auto mb-6 block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <span aria-hidden="true" className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19.5 10V5a.5.5 0 0 0-.5-.5h-4.5V10h5zm0 1.5h-5v8H19a.5.5 0 0 0 .5-.5v-7.5zm-6.5-7H5a.5.5 0 0 0-.5.5v14c0 .28.22.5.5.5h8v-15zM5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2z"></path></svg></span>
          <p className="text-xs">Diseños</p> 
           </li>
        <li className="self-auto mb-6 block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <span aria-hidden="true"  className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" d="m6.5 4.25.75-.75a2.121 2.121 0 0 1 3 3L6.5 10.25 2.75 6.5a2.121 2.121 0 0 1 3-3l.75.75zm7 6 4-7.5 4 7.5h-8zm-10.75 3.5h7.5v7.5h-7.5v-7.5zm14.75-.25a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path></svg></span>
         <p className="text-xs"> Elemento</p>
          </li>
       
        <li className="self-auto mb-6 block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
          <span aria-hidden="true" className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M18 5.5h-5.25V18c0 .28.22.5.5.5h2a.75.75 0 1 1 0 1.5h-6.5a.75.75 0 1 1 0-1.5h2a.5.5 0 0 0 .5-.5V5.5H6a.5.5 0 0 0-.5.5v1.25a.75.75 0 0 1-1.5 0V5.5C4 4.67 4.67 4 5.5 4h13c.83 0 1.5.67 1.5 1.5v1.75a.75.75 0 1 1-1.5 0V6a.5.5 0 0 0-.5-.5z"></path></svg></span>
         <p className="text-xs"> Textos</p>
          </li>
        <li className="self-auto mb-6 block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white" >
          <span aria-hidden="true"  className="flex justify-center items-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><defs><path id="_775853201__a" d="M13 7h7c1.1 0 2 .83 2 1.86v9.28c0 1.03-.9 1.86-2 1.86H4c-1.1 0-2-.83-2-1.86V8.86c0-.14.02-.28.05-.42A2 2 0 0 1 2 8V6c0-1.1.9-2 2-2h6.56a2 2 0 0 1 1.9 1.37L13 7zm-1.58 0-.39-1.16a.5.5 0 0 0-.47-.34H4a.5.5 0 0 0-.5.5v1.06c.16-.04.33-.06.5-.06h7.42zM4 8.5c-.3 0-.5.19-.5.36v9.28c0 .17.2.36.5.36h16c.3 0 .5-.19.5-.36V8.86c0-.17-.2-.36-.5-.36H4z"></path></defs><use fill="currentColor" fill-rule="nonzero" ></use></svg></span>
         <p className="text-xs">Proyectos</p> 
          </li>
      </ul>
    );
  }
  export default CardMenu;