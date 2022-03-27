import React, { Component } from "react";
import "./App.css";
import Users from "./Users";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Users />
        </header>
      </div>
    );
  }
}

export default App;
