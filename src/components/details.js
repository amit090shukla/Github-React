import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

const Details = props => {
  var uName = "";
  var imgUrl;
  const detail = props.userDetails[0];
  for (let key in detail) {
    if (key == "owner") {
      uName = detail[key].login;
      imgUrl = detail[key].avatar_url;
    }
  }
  console.log(uName, imgUrl);
  if(props.userDetails.length){
    return (
      <Paper>
        <Card>
          <CardActionArea>
            <CardMedia>
              <img src={imgUrl} style = {{width: '300px'}}/>
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {uName}
              </Typography>
              <Typography>
                Projects: {props.userDetails.length}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Show projects
            </Button>
          </CardActions>
        </Card>
      </Paper>
    );
  }
  return(
    <div>No user selected. Please search</div>
  );
  
};

export default Details;
