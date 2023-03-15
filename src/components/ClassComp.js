import React, { Component } from 'react'

class ClassComp extends Component {
    // constructor(props){
    //     super(props)
    //     this.state = {
    //       count:0,
    //     }
    // }

    state = {
      count:0
    }

    increment = ()=>{
        this.setState({
          count:this.state.count + 1
        })
    }

    decrement = ()=>{
      this.setState({
        count:this.state.count - 1
      })
  }

  render() {
    return (
      <div>
        <h2>Counter App</h2>
        <h4>Count : {this.state.count}</h4>
        <button className='btn btn-primary me-2' onClick={this.increment}>Increment</button>
        <button className='btn btn-danger' onClick={this.decrement}>Decrement</button>
      </div>
    )
  }
}

export default ClassComp