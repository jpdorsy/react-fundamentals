import React from "react";
import SharedContext from "./SharedContext";

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <SharedContext.Consumer>
          {state => (
            <div>
              <span style={{ color: state.selectedColor }}>Component 1</span>
            </div>
          )}
        </SharedContext.Consumer>
      </div>
    );
  }
}

export default Component1;
