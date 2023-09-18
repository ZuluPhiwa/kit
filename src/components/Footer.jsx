import React from 'react'
import {FaInstagram,FaFacebookSquare,FaGithubSquare,FaTwitterSquare,FaDribbbleSquare} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className=' px-4 flex items-center justify-center mx-auto py-16 w-full bg-[#1f272e] text-white'>
        <div>
        <h1 className=' justify-center text-center uppercase font-krinkesregular font-bold w-full text-3xl text-white '>
      KitMan
        </h1>
     <p className='py-4'>
        
        Kitman is a subdivision of Dreamories (PTY) Ltd 2018-2023. All rights reserved.
     </p>
     <div className='flex items-center justify-evenly my-6  '>
        <FaFacebookSquare  size={30}/>
        <FaInstagram size={30}/>
        <FaDribbbleSquare size={30}/>
        <FaGithubSquare size={30}/>
        <FaTwitterSquare size={30}/>
     </div>
        </div>
        
   
    </div>
  )
}

export default Footer