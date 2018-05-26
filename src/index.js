import React from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

class App extends React.Component{
  onButtonClick = () => {
    alert('hi');
  }
  render() {
    return(
      <div style={styles}>
        <button onClick={this.onButtonClick}>Hello</button>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));
