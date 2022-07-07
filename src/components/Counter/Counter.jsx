import React from "react";
import { useState } from "react";

const Counter = function () {
	
	const [count, setCount] = useState(0)

	function increment() {
    setCount (count + 1)
  }

  function decrement() {
    setCount (count - 1)
  }

	return(
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
	)
}

export default Counter;

//Можно написать через классовые компоненты, но это устаревает:

// class Counter extends React.Component {
// 	constructor (props) {
// 		super(props);
// 		this.state = {
// 			count: 0
// 		}

// 		this.increment = this.increment.bind(this)
// 		this.decrement = this.decrement.bind(this)
// 	}

// 	increment() {
// 		this.setState({count: this.state.count + 1})
//   }

// 	decrement() {
// 		this.setState({count: this.state.count - 1})
//   }

// 	render () {
// 		return (
// 			<div>
// 				<h1>{this.state.count}</h1>
// 				<button onClick={this.increment}>Увеличить</button>
// 				<button onClick={this.decrement}>Уменьшить</button>
// 			</div>			
// 		)
// 	}
// }

// export default Counter;