import { FaSun } from "react-icons/fa";

import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between px-10 py-3 max-h-80 items-center sticky top-0 left-0 right-0 backdrop-blur-md bg-transparente z-10'>
      <div className="header_logo flex gap-2 items-center font-bold">
        <div className='flex w-8 aspect-square bg-azul justify-center items-center rounded-full text-white '>
            JV
        </div>
        <p className='text-lg'><a href="#">Joelson Developer</a></p>
      </div>
      <nav>
        <ul className="header_nav flex gap-8 font-medium">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contato</a></li>
            <li className="flex items-center justify-center rounded-full w-8 aspect-square bg-cinza "><FaSun color="#6B7280"/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
