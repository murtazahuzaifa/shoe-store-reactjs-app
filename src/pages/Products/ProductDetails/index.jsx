import React from 'react';
import { Quantity } from '../../../components';
import { Button } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import { makeStyles } from '@material-ui/core/styles';
import { useParams } from "react-router";
//importing data 
import { Products } from '../../../data.js';
// import styling
import './ProductDetails.css';

const useStyles = makeStyles({
    addToCard: {
        // backgroundColor: '#7FFFD4',
        padding: '10px',
        // '&:hover': {
        //     backgroundColor: '#7FFFff',
        // }
    },
    buyNow: {
        // backgroundColor: '#7FFFD4',
        marginLeft: '10px',
        padding: '10px',
        // '&:hover': {
        //     backgroundColor: '#7FFFff',
        // }
    }
});

function ProductDetails() {
    const classes = useStyles();
    const { productId } = useParams();
    // const [quantity, setQuantity] = useState(1);
    // console.log(quantity);
    const prodcutsList = [...Object.values(Products.newCollections), ...Object.values(Products.bestSelling)];
    const prodDetails = prodcutsList[productId]

    return (
        <div className='product-details'>
            <label htmlFor="product-img">
                <img id="product-img" src={prodDetails.imgSrc} alt={prodDetails.name} />
            </label>
            <div className='product-text'>
                <h2 className="product-title" >{prodDetails.name}</h2>
                <h4 className="product-price" >{prodDetails.price}/- PKR</h4>
                <div className='color-quantity'>
                    <ul className="color-list" >
                        <li className='black-li' ><label htmlFor="black"><input id='black' type="radio" name='color' />  Black  </label></li>
                        <li className='brown-li' ><label htmlFor="brown"><input id='brown' type="radio" name='color' />  Brown  </label></li>
                        <li className='silk-li' ><label htmlFor="silk"><input id='silk' type="radio" name='color' />    Corn Silk  </label></li>
                        <li className='maroon-li' ><label htmlFor="maroon"><input id='maroon' type="radio" name='color' /> Maroon </label></li>
                    </ul>
                    <div className='quantity'><Quantity /></div>
                </div>
                <div>
                    <Button variant="outlined" size="small" color="primary" className={classes.addToCard} ><AddShoppingCart /> Add TO Cart</Button>
                    <Button variant="outlined" size="small" color="primary" className={classes.buyNow} ><ShoppingCart /> Buy Now</Button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;