import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import "./Cards.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 405,
    marginLeft:50,
    marginTop:50,
  },
  media: {
    height: 450,
  },
  root1: {
    maxWidth: 405,
    marginLeft:50,
    marginTop:50,
  },
  media1: {
    height: 250,
  },
});

export default function Cards2() {
  const classes = useStyles();

  return (
      <div className="cardscontainer">
      <div>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://microlancer.lancerassets.com/v2/services/5c/550e9e503642a190f5bc6eb82a4466/large_1-Main-Image.jpg'
          title="one"
        />
        <CardContent>
          <div>
            <h1>Task Management App</h1>
            </div>
            <div>
                <p>Material-UI components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css.</p>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
          className={classes.media1}
          image='https://miro.medium.com/max/909/1*v668XzpC-TkiByogjiEGEw.jpeg'
          title="two"
        />
        <CardContent>
          <div>
            <h1>Food Delivery App</h1>
            </div>
            <div>
                <p>Material-UI components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css.</p>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    <div>
    <Card className={classes.root1}>
      <CardActionArea>
        <CardMedia
          className={classes.media1}
          image='https://media-exp1.licdn.com/dms/image/C5112AQGFujtCQyfsZw/article-cover_image-shrink_720_1280/0/1587285108722?e=1623888000&v=beta&t=4XcgaJx1zaaLJ2b59AOSVOiq6J0Q9uVqxQTPjwWeQkw'
          title="three"
        />
        <CardContent>
          <div>
            <h1>Furniture Landing Page</h1>
            </div>
            <div>
                <p>Material-UI components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css.</p>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image='https://microlancer.lancerassets.com/v2/services/3c/498410eca511e8bdb007c10e141d28/large_citydirectory.jpg'
          title="four"
        />
        <CardContent>
          <div>
            <h1>Cleaning Service App</h1>
            </div>
            <div>
                <p>Material-UI components work in isolation. They are self-supporting, and will only inject the styles they need to display. They don't rely on any global style-sheets such as normalize.css.</p>
            </div>
        </CardContent>
      </CardActionArea>
    </Card>
    </div>
    </div>
  );
}