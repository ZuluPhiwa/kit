import React, {useState} from 'react'
import {FaBagShopping } from 'react-icons/fa6'
import {Link} from 'react-router-dom'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

      const [nav, setNav] = useState(false);

    const HandleNav =()=> 
    {
        setNav (!nav);
        if(!toggle)
        {
          document.body.style.overflow = 'hidden'
        }
        else
        {
          document.body.style.overflow = 'scroll'
        }
    }
    const closeMenu =()=> setNav(false);
  return (
    <div className=' flex shadow-sm z-20  bg-gray-100 justify-between items-center p-4 fixed w-full'>
        <div className=' font-bold font-krinkesregular  text-3xl'>
        <Link to="/home">Kitman</Link>
        </div>
        <div>
        <ul className=' hidden md:flex justify-between  font-extrabold uppercase text-xs'>
    
          <li className='mx-4 '> <Link to="/home">Home</Link> </li>
       
            <li className='mx-4 '><Link to="/about">About</Link> </li>
            <li className='mx-4 '><Link to="/contact">Contact</Link> </li>
            
        </ul>

        </div>
           

        <div className='hidden md:flex'>
          <Link to="/cart"><FaBagShopping className='mx-4'/></Link>
        

        </div>
                    <div onClick={HandleNav} className='block  md:hidden '>
              { nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={ 25}/>}
              
            </div>
            <div className={nav ? 'fixed h-full left-0 top-0 bg-[#000300] uppercase border-r w-[65%] border-r-gray-900 ease-in-out duration-500' : "fixed left-[-100%]"}>
            <h1 className=' text-white mt-8 mx-6 font-bold font-krinkesregular text-3xl'>
        KitMan
        </h1>
            <ul className=' pt-24 font-bold text-white'>
                <li className='mx-6 pb-4'> <Link to="/" onClick={closeMenu}>Home</Link> </li>
                <li className='mx-6 pb-4'><Link to="/about" onClick={closeMenu}>About</Link> </li>
                <li className='mx-6 pb-4'><Link to="/contact" onClick={closeMenu}>Contact</Link> </li>
                <li className='mx-6 '><Link to="/cart" onClick={closeMenu}>Cart</Link></li> 
            </ul> 
            </div>
       
    </div>
  )
}

export default Navbar