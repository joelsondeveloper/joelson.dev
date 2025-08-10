"use client"

import { FaSun } from "react-icons/fa";

import { useEffect, useState } from "react";

const Header = () => {

    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  return (
    <header className='flex justify-between px-10 py-3 max-h-80 items-center sticky top-0 left-0 right-0 backdrop-blur-md bg-transparente z-10'>
      <div className="header_logo flex gap-2 items-center font-bold">
        <div className='flex w-8 aspect-square bg-azul justify-center items-center rounded-full text-white '>
            JV
        </div>
        <p className='text-lg'><a href="#">Joelson Developer</a></p>
      </div>
      <nav>
        <ul className="header_nav flex-col sm:flex-row flex absolute sm:static top-[3.5rem] right-0 left-0 text-end  gap-8 font-medium bg-white sm:bg-transparent px-5 sm:px-0 sm:pb-0 max-h-0 overflow-hidden">
            <li><a href="#about">Sobre</a></li>
            <li><a href="#projects">Projetos</a></li>
            <li><a href="#contact">Contato</a></li>
            <li className="flex items-center justify-center rounded-full w-8 aspect-square bg-cinza ml-auto" onClick={() => setIsDark(!isDark)}><FaSun color="#6B7280"/></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
