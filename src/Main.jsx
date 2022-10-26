import React, { Component } from "react";

class Main extends Component {
  state = { counter: 100, };

  addOneHandler = () =>{
    this.setState({counter: this.state.counter + 1})

  };
  render() {
    return (
      <main>
        <div className="container">
          <div className="counter">
            <p>{this.state.counter}</p>
          </div>

          <div className="button-20">
            <button>Add Five</button>
            <button onClick={this.addOneHandler}>Add One</button>
            <button>Reset</button>
            <button>Remove One</button>
            <button>Remove Five</button>
          </div>
        </div>
      </main>
    );
  }
};

export default Main;
