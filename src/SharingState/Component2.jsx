import React from "react";

class Component2 extends React.Component {
  render() {
    return (
      <div>
        <span style={{ color: this.props.color }}>Component 2</span>
      </div>
    );
  }
}

export default Component2;
