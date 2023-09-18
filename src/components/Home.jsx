import React from 'react'
import Banner2 from "../assets/Bann/banner2.jpg"
import {PRODUCTS} from "../products"
import Products from './Products'
import Footer from './Footer'
const Home = () => {
  return (
    <div className=' h-full' id='home'>
        
        <div >
        <div className=' w-full top-0 left-0 bg-black/60 h-screen absolute'/>
        <img src={Banner2} alt="logos" className=' h-[100vh] w-full object-cover ' />

        <div className=' text-center top-9 sm:top-10 justify-center  left-16 right-16 absolute text-white flex flex-col h-full '>
                <h1 className=' text-2xl font-bold uppercase sm:text-5xl font-athletic tracking-widest '>Celebrate the new Season</h1>
            </div>
            <p className='text-xl pt-4 sm:pt-0 sm:text-2xl text-white  font-athletic text-center top-[58vh] sm:top-[62vh] justify-center left-16 right-16 absolute tracking-wider'>Represent your team.</p>
        </div>
      <a href="#pics"><button className='text-black left-[40%] right-[40%] bg-white  p-2 text-center justify-center absolute top-[65vh] sm:top-[68vh] font-bryson rounded-lg box-border'>
           <p className='uppercase font-bold font-athletic'>shop now </p>
            </button></a>  

            <div id='pics' className=' text-center justify-center p-10'>
                <p className='text-extrabold text-4xl font-athletic'>
                    This Month's Picks
                </p>
            </div>
        
        <div  className='grid md:grid-cols-3 mx-8 my-4 max-w-full gap-8 '>
            {PRODUCTS.map((product)=> (<Products data= {product}/>))}
        </div>

        <div className='pt-5'>
        <Footer/>
        </div>
        
    </div>
  )
}

export default Home