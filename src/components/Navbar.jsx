import { useEffect } from 'react';
import Logo from '../assets/logo.png'
import { FaGithub } from "react-icons/fa6";


function Navbar() {

  return (
<nav className="">
  <div className="max-w-screen-xl h-[10vh] flex items-center justify-between mx-auto pt-6 px-10 sm:flex-row flex-col">
    <a href="#" className="flex items-center space-x-3">
        <img src={Logo} className="h-12 drop-shadow-xl hover:scale-125 hover:rotate-12" alt="Logo" />
        <span className="self-center text-3xl tracking-wider font-semibold whitespace-nowrap text-black hover:tracking-widest transition-all duration-300">FinKoo</span>
    </a>
    <a href="#" className="hidden md:flex text-4xl hover:text-[#60587b]">
        <FaGithub />
    </a>
  </div>
</nav>

  )
}

export default Navbar
