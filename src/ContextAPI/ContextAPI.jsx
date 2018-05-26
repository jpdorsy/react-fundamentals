import React from "react";
import SharedContext from "./SharedContext";
import Component1 from "./Component1";
import Component2 from "./Component2";

class ContextAPI extends React.Component {
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
        <SharedContext.Provider value={this.state}>
          <Component1 />
          <Component2 />
        </SharedContext.Provider>
      </div>
    );
  }
}

export default ContextAPI;
