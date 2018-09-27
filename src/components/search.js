import React from "react";
import Paper from "@material-ui/core/Paper";

class Search extends React.Component {

  state = {
    query: ''
  }

  queryChange = (e) => {
    this.setState({query: e.target.value});
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
  }

  render() {
    return (
      <Paper style={styleObj.container}>
        <form>
          <input value = {this.state.query} placeholder = 'Type here' onChange = { e => this.queryChange(e)}/>
          <input type="submit" value="Search Profile" onClick = {this.onSubmit}/>
        </form>
      </Paper>
    );
  }
}

const styleObj = {
  container: {
    height: "60px"
  },
  searchIcon: {
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
export default Search;
