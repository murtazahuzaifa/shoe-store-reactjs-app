import React from 'react';
import Slider from './Slider';
import NewCollections from './NewCollections';

function Home(){
    return(
        <div>
            <Slider/>
            <NewCollections/>
            <h4> Home </h4>
        </div>
    );
}

export default Home;