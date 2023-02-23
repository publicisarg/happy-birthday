import { Button } from "@material-tailwind/react";
import React from "react";
import CardMenu from "./menu";
import { FaUserCircle } from "react-icons/fa";


export const Sidebars = () => {
  return (
<>
    <div className="relative min-h-screen md:flex" data-dev-hint="container">
   

    <aside id="sidebar" className="bg-gray-800 text-gray-100 md:w-full w-1/2 space-y-6 pt-6 px-0 absolute inset-y-0 left-0 transform md:relative md:translate-x-0 transition duration-200 ease-in-out  md:flex md:flex-col md:justify-between overflow-y-auto" data-dev-hint="sidebar; px-0 for frameless; px-2 for visually inset the navigation">
        <div className="flex flex-col space-y-6">


            <nav data-dev-hint="main navigation">
               <CardMenu></CardMenu>
            </nav>
        </div>

        <nav data-dev-hint="second-main-navigation or footer navigation " className="self-auto ">
            <a href="#" className="py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white flex justify-center items-center">
              <FaUserCircle  color="white" fontSize="2em" ></FaUserCircle>
               <p> Cuenta</p>
            </a>
            <a href="#" className="block py-2 px-4 transition duration-200 hover:bg-gray-700 hover:text-white">
                Salir
            </a>
           
        </nav>
        
    </aside>
    <div className="bg-gray-500 text-gray-100 p-11 rounded-r-3xl flex w-60">
           <ul>
            <li>
                diseño 1 
            </li>
            <li>
                diseño 2
            </li>
            <li>
                diseño 3 
            </li>
            <li>
                diseño 4
            </li>
            <li>
                diseño 5 
            </li>
            <li>
                diseño 6
            </li>

           </ul>
        </div>
    </div>
</>
  )
}
