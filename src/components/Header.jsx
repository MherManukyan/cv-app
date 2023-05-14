import { useState } from "react";
import {FaBars,FaTimes} from "react-icons/fa";
import { Link } from "react-scroll";
export const Header = () => {
    const [nav,setNav] = useState(false);
    const handleClick = () => setNav(!nav)
   
    return (
        <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#333131] text-[whitesmoke]'>
           <div>
                <Link to="home" className="cursor-pointer">
                  Programming
                </Link>
           </div>
           {/* menu */}
           <ul className="hidden md:flex gap-10">
                    <li>
                        <Link to='home' className="cursor-pointer" smooth={true} duration={500}>Home</Link>
                    </li>
                    <li>
                        <Link to="about" className="cursor-pointer" smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="learn" className="cursor-pointer" smooth={true} duration={500}>
                            Learn
                        </Link>
                    </li>
                    <li>
                        <Link to="advantages" className="cursor-pointer" smooth={true} duration={500}>
                            Advantages
                        </Link>
                    </li>
                    <li>
                        <Link to="start" className="cursor-pointer" smooth={true} duration={500}>
                            Start
                        </Link>
                    </li> 
                   
           </ul>
              {/* Hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
        {/* Mobile menu */}
        <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#333] flex flex-col justify-center items-center cursor-pointer'
        }
      >
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' >
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='learn'>
            Learn
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='advantages'>
            Advantages
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='start'>
            Start
          </Link>
        </li>
       
      </ul>
        </div>
        
    )
}