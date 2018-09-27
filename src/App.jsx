import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Search from './components/search';
import Details from './components/details';


// https://api.github.com/users/${queryString}/repos
class App extends Component {

  state = {
    profileData : []
  }
  onSubmit = (queryString) => {
    fetch(`https://api.github.com/users/${queryString}/repos`)
    .then(res => res.json()).then(res => {
      this.setState({profileData: res})
    })
  }

  render() {
    console.log(this.state.profileData)
    return (
      <Paper style = {styleObj.header}>
        <Search onSubmit = {this.onSubmit}/>
        <Details userDetails = {this.state.profileData}/>
      </Paper>
    );
  }
}


const styleObj = {
  header: {
    height: '90vh'
  }
}
export default App;
