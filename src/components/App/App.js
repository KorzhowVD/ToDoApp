import React from "react";

function App() {
  
  let likes = 5;

  function increment() {
    likes += 1;
    console.log(likes)
  }

  function decrement() {
    likes -= 1;
    console.log(likes)
  }

  return(
    <div>
      <h1>{likes}</h1>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  )
}

export {App};
