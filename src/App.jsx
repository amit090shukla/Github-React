import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';
import Search from './components/search';
import Details from './components/details';


class App extends Component {

  state = {
    profileData: [],
    uName: '',
    imgUrl: ''
  }

  onSubmit = (queryString) => {
    fetch(`https://api.github.com/users/${queryString}/repos`)
      .then(res => res.json()).then(res => {
        this.setState({ profileData: res })
      }).then(() => {
        var uName = "";
        var imgUrl = "";
        const detail = this.state.profileData[0];
        for (let key in detail) {
          if (key === "owner") {
            uName = detail[key].login;
            imgUrl = detail[key].avatar_url;
          }
        }
        this.setState({uName, imgUrl});
      })
  }

  render() {
    console.log(this.state.profileData)
    return (
      <Paper style={styleObj.header}>
        <Search onSubmit={this.onSubmit} />
        <Details userDetails={this.state.profileData} uName = {this.state.uName} imgUrl = {this.state.imgUrl}/>
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
