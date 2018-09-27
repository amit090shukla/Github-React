import React from "react";
import Paper from "@material-ui/core/Paper";
import Input from "@material-ui/core/Input";
import SearchIcon from "@material-ui/icons/Search";

const search = (e) => {
    e.preventDefault();
    console.log(e);
}
const Search = props => {
  return (
    <Paper style={styleObj.container}>
    <form onSubmit = {search}>
      <input/>
        <input type = 'submit' value = 'Search Profile' ></input>
      </form>
    </Paper>
  );
};

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
