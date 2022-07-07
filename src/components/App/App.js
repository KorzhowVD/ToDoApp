import React, { useState } from "react";
import Counter from "../Counter/Counter";

function App() {
  
  const [likes, setLikes] = useState(5)
  // const [value, setValue] = useState('Текст в поле')

  return(
    <div>
      <Counter/>
    </div>
  )
}

export {App};
