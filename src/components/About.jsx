import React from 'react'
import Banner1 from "../assets/Bann/banner1.jpeg"
import Footer from './Footer'
const About = () => {
  return (
    <div id='about'>
      
      <div className=' bg-[#000300] items-center justify-center pt-20 pb-5'>
            <p className='text-3xl text-white items-center justify-center mx-auto flex font-amazon'>
                About
            </p>
            <p className='text-sm text-white font-amazon items-center  justify-center flex'>
               Read all about the company's history and come up
            </p>
        </div>

    <div className=' py-7 px-2 md:px-32 grid md:grid-cols-2'>

      <div className='mx-2 md:mx-6'>
        <div className='font-amazon font-bold text-2xl mb-4'>
          Ready Player One?
        </div>
        <div className=' text-justify mb-2'>
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum necessitatibus mollitia earum nemo corporis, nisi nihil pariatur ipsam natus ducimus, est culpa explicabo eveniet dolorum minus voluptate fugit quaerat veritatis iste dicta? Totam animi voluptas quis magni! Delectus, non modi ipsum nisi nam perferendis, officiis, molestiae amet doloremque in hic architecto quod esse laudantium vel odio recusandae natus molestias? Placeat accusamus nulla perferendis molestiae eligendi, itaque non expedita excepturi error blanditiis saepe? Voluptates fugit quaerat alias, neque consectetur laborum ab.
              </div>
      </div>

      <div className=' w-full h-full' >

        <img src={Banner1} alt="the picturez" className=' rounded-md' />
      </div>
    </div>

    <Footer/>
    </div>
  )
}

export default About