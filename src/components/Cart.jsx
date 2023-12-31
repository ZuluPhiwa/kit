import React, {useContext} from 'react'
import { PRODUCTS } from '../products'
import { ShopContext} from '../context/ShopContext'
import CartItem from './CartIem';
import {useNavigate} from 'react-router-dom'
import Footer from './Footer'
const Cart = () => {

    const { getTotalAmount,cartItems} = useContext(ShopContext);
    const totalAmount = getTotalAmount();

    const navigate = useNavigate()
  return (
    <div id='cart'>
        
        <div className=' bg-[#000300] items-center justify-center pt-20 pb-5'>
            <p className='text-3xl text-white items-center justify-center mx-auto flex font-amazon'>
                Shopping Cart
            </p>
            <p className='text-sm text-white font-amazon items-center justify-center flex'>
                Items Added To Cart
            </p>
        </div>

        <div className='w-full px-5 sm:px-72 items-center justify-center'>
            {
                PRODUCTS.map((product)=> 
                {
                    if(cartItems [product.id] !==0)
                    {
                        return <CartItem data ={product}/>
                    }
                   
                })
            }
        </div>

        <div className='flex items-end justify-center'>
            <p className='font-bold font-2xl font-mono'>
                Subtotal: E{totalAmount} 
            </p>
        </div>
        {totalAmount >0 ? 
        <div className='flex items-center justify-center p-3 '>
                <button className='bg-gray-300 shadow-md mx-2 rounded-md p-2 font-mono font-bold'>
                    Checkout
                </button>
                <button onClick={()=> navigate('/home')} className='bg-gray-300 shadow-md mx-2 rounded-md p-2 font-mono font-bold'>
                    Continue Shopping
                </button>
        </div>
           : <p className='flex items-end justify-center'>Your Cart Is Empty</p> }

        <div className='pt-4'><Footer/></div>
            
    </div>
  )
}

export default Cart