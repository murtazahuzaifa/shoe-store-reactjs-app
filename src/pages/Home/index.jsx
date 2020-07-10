import React from 'react';
import Slider from './Slider';
import NewCollections from './NewCollections';
import BestSelling from './BestSelling';
import AllProducts from './AllProducts';
import './style.css';

function Home(){
    return(
        <div>
            <Slider/>
            <br/>
            <NewCollections/>
            <BestSelling/>
            <AllProducts/>
            <h4> Home </h4>
        </div>
    );
}

export default Home;