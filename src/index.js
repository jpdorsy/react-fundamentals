import React from "react";
import { render } from "react-dom";
import EventsFundamentals from "./EventsFundamentals";
const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class App extends React.Component {
  render() {
    return (
      <div style={styles}>
        <EventsFundamentals />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
