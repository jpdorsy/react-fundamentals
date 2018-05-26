import React from "react";

class Component1 extends React.Component {
  render() {
    return (
      <div>
        <span style={{ color: this.props.color }}>Component 1</span>
      </div>
    );
  }
}

export default Component1;
