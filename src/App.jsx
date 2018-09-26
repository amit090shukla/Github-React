import React, { Component } from 'react';
import './App.css';
import Paper from '@material-ui/core/Paper';

class App extends Component {
  render() {
    return (
      <Paper style = {styleObj.header}>
        Hello
      </Paper>
    );
  }
}


const styleObj = {
  header: {
    height: '50px'
  }
}
export default App;
