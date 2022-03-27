import React, { Component } from "react";
import axios from "axios";

export class Users extends Component {
  constructor() {
    super();
    this.state = {
      text: "Not requested yet!",
    };
  }

  handleOnClick = () => {
    axios.get("/users").then((response) => {
      //   console.log(response.data.title);
      this.setState({
        text: response.data.title,
      });
    });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleOnClick}>Request</button>
        <h1>{this.state.text}</h1>
      </div>
    );
  }
}

export default Users;
