import React, { useState } from 'react';

// importing style
import './Quantity.css';

export default function () {

    const [quantity, setQuantity] = useState(1);
    const onChnageHandler = (event)=>{
        const value = event.target.value;
        setQuantity( (Number(value)===0)? 1:Number(value) );
    }

    return (
        <div className='quantity-container' >

            <input type='button' value='-' className='minus-btn'
                onClick={() => { setQuantity((quantity===1)? (quantity):(quantity - 1) ) }} />

            <input className='quantity-input' type='number' placeholder='Qty'
            value={quantity} 
            onChange={onChnageHandler} />

            <input type='button' value='+' className='plus-btn'
                onClick={() => { setQuantity(quantity + 1) }} />
        </div>
    )
}