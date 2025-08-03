import React from 'react'

const Header = () => {
  return (
    <header className='flex justify-between px-10 py-3 max-h-80'>
      <div className="header_logo flex gap-2">
        <div>
            JV
        </div>
        <p>Joelson Developer</p>
      </div>
      <nav>
        <ul className="header_nav flex gap-8">
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Projetos</a></li>
            <li><a href="#">Skills</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contato</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
