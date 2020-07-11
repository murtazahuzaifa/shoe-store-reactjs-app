import React from 'react';
import { Grid } from '@material-ui/core';

// importing style
import './PageNotFound.css';

function PageNotFound() {
return(
    <Grid className='page-not-found-container' container item justify='center' xs={12}>
        <label htmlFor='page-not-found-img'>
            <img id='page-not-found-img' src="https://www.nhgonow.com/img/error-404.png" alt="page not found"/>
        </label>
    </Grid>
);
}

export default PageNotFound;
