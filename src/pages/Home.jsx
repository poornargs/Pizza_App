import React from 'react';

import Items from './Items';

import { useCartCrud } from "../context/CartContext";

function Home(props) {

    const { navigateToPage } = useCartCrud();

function moveToCart(){
    navigateToPage("cart");
}

    return (
       <>
       <div className='hero py-16'>
        <div className="container mx-auto flex items-center justify-between">
            <div className="w-1/2" >
                <h6 className='text-lg'>
                    <em>Are you hungry?</em>
                </h6>
                <h1 className='text-3xl md:text-6xl font-bold'>
                    Don't wait!
                </h1>
                <button className='px-6 py-2 rounded-ful text-white font-bold mt-4 bg-yellow-500 hover:bg-yellow-600' onClick={moveToCart}>Order Now</button>
            </div>
        </div>
       </div>
       <div className='pb-24'>
        <Items />
       </div>
       </>
    );
}

export default Home;