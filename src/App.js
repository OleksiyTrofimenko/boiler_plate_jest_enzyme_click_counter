import React, { PureComponent } from 'react';

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <div data-test='component-app'>
        <h1 data-test='counter-display'>Counter {this.state.counter}</h1>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
          data-test='increment-button'>
          Increment
        </button>
      </div>
    );
  }
}

export default App;
