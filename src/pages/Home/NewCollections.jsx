import React from 'react';
import { Grid, Typography, Container, Hidden, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { ProductCard } from '../../components';

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

    return (
        <Container maxWidth='lg' className={classes.root} >
            <Typography variant='h4' component='h4' align='center' >New Collections</Typography>
            <hr />
                <Grid className={classes.gridContainer} container spacing={2} component='div' justify='center' wrap='wrap' >
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard />
                    </Grid>
                    <Grid container item xs={12} sm={6} md={3} justify='center' >
                        <ProductCard />
                    </Grid>
                </Grid>
        </Container >

    );
}

export default NewCollections;
