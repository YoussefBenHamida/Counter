import React, { Component } from 'react';

// Define the type for the state
interface CounterState {
  count: number;
}

class Counter extends Component<{}, CounterState> { 
  // Initialize state with type annotation
  state: CounterState = {
    count: 0
  }; 

  // Add return type annotation for the method
  increment = (): void => {
    this.setState({ count: this.state.count + 1 }); 
  }; 

  render(): JSX.Element { 
    return (
      <div> 
        <p>Count: {this.state.count}</p> 
        <button onClick={this.increment}>Increment</button> 
      </div>
    );
  }
} 

export default Counter;