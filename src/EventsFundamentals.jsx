import React from "react";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

class EventsFundamentals extends React.Component {
  // Fat arrow function
  onButtonClick1 = () => {
    alert("onButtonClick1");
  };
  //Normal class function
  onButtonClick2() {
    alert("onButtonClick2");
  }
  //Normal class function
  onButtonClick3() {
    alert("onButtonClick3");
  }
  render() {
    return (
      <div style={styles}>
        <button onClick={this.onButtonClick1}>Button1</button>
        <br />
        <br />
        <div>
          To use this inside the normal class function, onButtonClick2 function
          have to bound to the Class by using
        </div>
        <div>1). bind() method to the callback</div>
        <button onClick={this.onButtonClick2.bind(this)}>Button2</button>
        <br />
        <br />
        <div>2). use arrow function inside the event hook up</div>
        <button onClick={() => this.onButtonClick3()}>Button3</button>
      </div>
    );
  }
}

export default EventsFundamentals;
