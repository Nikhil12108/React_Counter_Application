// hook
import { useState } from "react";
// state , componenet

// state of a todo Applicaton
/* todo {
       todos :[]
}*/
function App() {
  const [count, setCount] = useState(0);


  return (
    <div>
      <CustomButton count={count} setCount={setCount}/>
    </div>
  )
}

function CustomButton({count, setCount}) { // destruction props

  function onClickHandler() {
    setCount(count + 1)
  }  
  return(
    <button onClick={onClickHandler}>
    Counter: {count}
  </button>
  ) 
}
export default App
