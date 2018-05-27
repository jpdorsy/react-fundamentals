import React from "react";
// 2. Import as CSS modules
// Not working now and will be supported from react-scripts 2.0 and above)
import styles2 from "./styles2.css";

import styled from "styled-components";
const style3 = styled.div`
  color: "yellow";
`;

//Three approaches
//1. Using styles props of jsx
const styles = {
  styling1: {
    fontFamily: "sans-serif",
    textAlign: "center",
    color: "green"
  }
};

class StylingComponent extends React.Component {
  render() {
    return (
      <div>
        <div style={styles.styling1}>Styling 1</div>
        <div className={styles2.style2}>Styling 2</div>
        <div className={style3}>Styling 3</div>
      </div>
    );
  }
}

export default StylingComponent;
