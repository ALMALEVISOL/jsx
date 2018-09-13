import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class Title extends Component {
  render() {
    return <h1>Astronautas rusos</h1>;
  }
}

class SubTitle extends Component {
  render() {
    return <h2>Hola amigos</h2>;
  }
}

class AstronautsList extends Component {
  render() {
    return (
      <ul>
        <li>ALMA</li>
        <li>ROSA</li>
      </ul>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Title />
        <SubTitle />

        <TodaysDate />
      </div>
    );
  }
}

export default App;
