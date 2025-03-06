import { useState } from "react"
import "./App.css"
import { useEffect } from "react"
function App() {
  const [inputValue, setInputValue] = useState("")
  const [answer, setAnswer] = useState(inputValue)
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "%", "."]
   const operators = ["+","/","-","*"]

  const numberElements = numbers.map((number) => {
    return <button onClick={()=>handleClick(number)} key={number}>{number}</button>
  })
  const operatorElements = operators.map((operator) => {
    return <button onClick={()=>handleClick(operator)} key={operator}>{operator}</button>
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      try {
        setAnswer(eval(inputValue))
      } catch (e) {
        console.error(e);
      }
    }, 1000)
    
    return ()=>clearTimeout(timer)
  }
    , [inputValue])
  
  
  function handleClick(value) {
    setInputValue(prevValue => prevValue + value)
  }
  
 
  

 

  
  return (
    <div>
      <div className="container">
        <div className="screen">
          <div className="input">
            <input
              type="text"
              value={inputValue}
              onChange={(e)=>setInputValue(e.target.value)}
            />
          </div>
          <div className="display">
            {answer}
          </div>

        </div>
          <div className="buttons">
            <div className="numberbtn">
              {numberElements}
            </div>
            <div className="operatorbtns">
              {operatorElements}
          </div>

          </div>
      </div>
    </div>
  )
}

export default App
