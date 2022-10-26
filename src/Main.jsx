import React, { Component } from "react";
import Button from "./Button";


class Main extends Component {
  state = { counter: 100, };


  addOneHandler = () =>{
    this.setState({counter: this.state.counter + 1})
  };

  addFiveHandler = () => {
    this.setState({counter: this.state.counter + 5})
  
  };

  addResetHandler = () => {
    this.setState({counter: this.state.counter=100});
  };

  removeOneHandler = () => {
    if(this.state.counter >= 1){
    this.setState({counter: this.state.counter -1 });
  }
  else{
    this.setState({counter: this.state.counter = 0 })
  }
  
  };
  removeFiveHandler = () => {
    if(this.state.counter >= 5){
      this.setState({counter: this.state.counter -5 })
    }
    else{
      this.setState({counter: this.state.counter = 0 })
    }
    
  };
  render() {
    let counterClass= "";
    this.state.counter===0 || this.state.counter===100
    ?(counterClass= "counter")
    : this.state.counter%2===0
    ?(counterClass= "even")
    
    :(counterClass= "odd")
  
    return (
      <main>
        <div className="container">
          <div className={counterClass}>
            <p>{this.state.counter}</p>
          </div>

          <div className="button-20">
            <Button click={this.addFiveHandler}>Add Five</Button>
            <Button click={this.addOneHandler}>Add One</Button>
            <Button click={this.addResetHandler}>Reset</Button>
            <Button click={this.removeOneHandler}>Remove One</Button>
            <Button click={this.removeFiveHandler}>Remove Five</Button>
          </div>
        </div>
      </main>
    );
  }
};

export default Main;
