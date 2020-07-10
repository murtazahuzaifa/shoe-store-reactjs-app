import React from 'react';
import Slider from './Slider';
import NewCollections from './NewCollections';
import './style.css';

function Home(){
    return(
        <div>
            <Slider/>
            <br/>
            <NewCollections/>
            <h4> Home </h4>
        </div>
    );
}

export default Home;