import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Project from './projects';

class Details extends React.Component {


  state = {
    showProjects: false
  }

  showProjects = () => {
    this.setState({ showProjects: true });
  }
  render() {
    if (this.props.userDetails.length) {
      return (
        <Paper>
          <Card>
            <CardActionArea>
              <CardMedia>
                <img src={this.props.imgUrl} style={{ width: '300px' }} />
              </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                  {this.props.uName}
                </Typography>
                <Typography>
                  Projects: {this.props.userDetails.length}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary" onClick={this.showProjects}>
                Show projects
              </Button>
            </CardActions>
          </Card>
          {
            this.state.showProjects ? this.props.userDetails.map((project) => {
              return(
                <div key={project.id} style={styles.projectContainer}>
                  <div><span style = {styles.heading}>Language: </span> {project.language}</div>
                  <div><span style = {styles.heading}>Project Name: </span> {project.name}</div>
                  <div><span style = {styles.heading}>Private: </span>{project.private ? 'Yes': 'No'}</div>
                  <div><span style = {styles.heading}>Updated At: </span>{project.updated_at}</div>
                  <div><span style = {styles.heading}>Forks: </span>{project.forks}</div>
                  <div><span style = {styles.heading}>Open Issues: </span>{project.open_issues}</div>
                  <a href = {project.html_url}><Button size="small" color="primary">Link</Button></a>
                </div>
              );
            }) : null

          }
        </Paper>
      );
    }
    return (
      <div>No user selected. Please search</div>
    );

  }

};

const styles = {
  projectContainer: {
    marginTop: '20px',
    padding: '20px',
    borderBottom: '1px solid #d2d2d2',
    marginTop: '20px'
  },
  heading: {
    fontWeight: '600'
  }
}

export default Details;
