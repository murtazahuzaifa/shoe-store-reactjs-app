import React from 'react';
// import AllProducts from './AllProducts';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles(theme => ({
    title: {
        backgroundColor: '#ebe6e6',
        padding:'70px 0px 20px 20px',
    },
    mydetails:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        flexWrap:'wrap',
    },
    info:{
        marginTop:'10%',
    },
    image:{
        width:'90%',
        borderRadius:'5%',
        boxShadow:'3px 3px 5px grey'
    }
}))

function About() {

    const classes = useStyle();

    return (
        <Container maxWidth='lg'>
            <div className={classes.title}>
                <h1><u>About</u></h1>
                {/* <p>Menz FOOTWEAR</p> */}
            </div>
            <hr />
            <div className={classes.mydetails}>
                <div><img className={classes.image} src={require('../img.jpg')} alt='creater' title='Creater of this app' /></div>
                <div className={classes.info}>
                    <h4>Name: <strong>Murtaza</strong></h4>
                    <hr/>
                    <h5><a href="https://github.com/murtazahuzaifa/shoe-store-reactjs-app" rel="noopener noreferrer" target='_blank'>Github repo</a></h5>
                    <h6>Cell: +923360031756</h6>
                    <br/>
                    <p>This shoe store app is developed by Murtaza<br/>as a Project of Bootcamp.</p>
                </div>
            </div>
            <br />
            
        </Container>
    );
}

export default About;