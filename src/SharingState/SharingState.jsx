import React from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";

class SharingState extends React.Component {
  state = {
    selectedColor: "black"
  };

  toggleColor = () => {
    this.setState({
      selectedColor: this.state.selectedColor === "black" ? "red" : "black"
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.toggleColor}>Change Color</button>
        <Component1 color={this.state.selectedColor} />
        <Component2 color={this.state.selectedColor} />
      </div>
    );
  }
}

export default SharingState;
