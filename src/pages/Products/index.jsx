import React from 'react';
// import AllProducts from './AllProducts';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Outlet } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    title: {
        backgroundColor: '#ebe6e6',
        padding:'70px 0px 20px 20px',
    },
}))

function Products() {

    const classes = useStyle();

    return (
        <Container maxWidth='lg'>
            <div className={classes.title}>
                <h1><u>Products</u></h1>
                <p>Menz FOOTWEAR</p>
            </div>
            <hr />
            <br />
            <Outlet/>
        </Container>
    );
}

export default Products;