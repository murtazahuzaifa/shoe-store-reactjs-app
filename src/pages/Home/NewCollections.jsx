import React from 'react';
import { Grid, Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProductCard } from '../../components';

//importing data 
import { Products } from '../../data.js';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    gridContainer: {
        padding: theme.spacing(1),
    },
}));

function NewCollections() {
    const classes = useStyles();
    
    const {newCollections} = Products;

    return (
        <Container maxWidth='lg' className={classes.root} >
            <Typography variant='h4' component='h4' align='center' ><b>New Collections</b></Typography>
            <hr />
                <Grid className={classes.gridContainer} container spacing={2} component='div' justify='center' wrap='wrap' >
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard {...newCollections[0]} />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard {...newCollections[1]} />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard {...newCollections[2]} />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard {...newCollections[3]} />
                    </Grid>
                </Grid>
        </Container >

    );
}

export default NewCollections;
