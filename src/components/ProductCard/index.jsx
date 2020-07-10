import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import ShoppingCart from '@material-ui/icons/ShoppingCart';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  media: {
    paddingTop: '100%',
  },
  cardAction:{
      justifyContent:"center",
  }
});

export default function ProductCard({imgSrc, name, price}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} elevation={4}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imgSrc}
          title={name}
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
        {/* <Button size="small" color="primary">
        <ShoppingCart/>
          Buy Now
        </Button> */}
        <Button size="small" color="primary">
        <AddShoppingCart/>
          Add TO Cart
        </Button>
      </CardActions>
    </Card>
  );
}
