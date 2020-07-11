import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Typography, Button, Card, CardActionArea, CardActions, CardContent, CardMedia  } from '@material-ui/core';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import {useNavigate} from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    paddingTop: '100%',
  },
  cardAction:{
      justifyContent:"center",
      // float:''
  }
});

export default function ProductCard({imgSrc, name, price, id}) {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleClick = ()=>{
    navigate(`/Products/${id}`);
  }

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={name}
          onClick={handleClick}
        />
        <CardContent>
          <Typography gutterBottom variant="subtitle1" component="h6" align='center'>
            {name}
          </Typography>
          <Typography variant="h6" component="h6" align='center'>
            {price}/- PKR
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.cardAction}>
        <Button size="small" color="primary">
        <AddShoppingCart/>
          Add TO Cart
        </Button>
      </CardActions>
    </Card>
  );
}
