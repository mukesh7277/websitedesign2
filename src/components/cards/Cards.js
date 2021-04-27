import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    marginLeft:50,
  },
  media: {
    height: 300,
    
  },
  
});

export default function Cards(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.media}>
            <div>
                <img src={props.Image} alt='hey' style={{height:100,width:100}}/>
            </div>
          <div>
            <h1>{props.title}</h1>
            </div>
          <div style={{marginTop:70}} >
            <p>{props.title2}</p>
            <Button variant="contained" size="small" color="secondary">Learn More</Button>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}