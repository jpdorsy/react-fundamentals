import React from "react";
import { render } from "react-dom";
import EventsFundamentals from "./EventsFundamentals";
import SharingState from "./SharingState/SharingState";
import ContextAPI from "./ContextAPI/ContextAPI";
import StylingComponent from "./StylingComponent/StylingComponent";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <h1>Events Fundamentals</h1>
        <EventsFundamentals />
        <hr />
        <h1>Sharing State through parent component</h1>
        <SharingState />
        <hr />
        <h1>Sharing State through Context API</h1>
        <ContextAPI />
        <hr />
        <h1>Styling the component</h1>
        <StylingComponent />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
