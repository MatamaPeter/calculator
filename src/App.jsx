import { useState } from "react"
import "./App.css"
import { useEffect } from "react"
function App() {
  const [inputValue, setInputValue] = useState("")
  const [answer, setAnswer] = useState(inputValue)
  
  const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "%", "."]
   const operators = ["+","/","-","*"]

  const numberElements = numbers.map((number) => {
    return <button onClick={()=>handleClick(number)} key={number}>{number}</button>
  })
  const operatorElements = operators.map((operator) => {
    return <button onClick={()=>handleClick(operator)} key={operator}>{operator}</button>
  })

  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.trim() !== "") {
        try {
          setAnswer(eval(inputValue))
        } catch{
          setAnswer("!Error")
        }
      } else {
        setAnswer("")
      }
    }, 1000)
    
    return ()=>clearTimeout(timer)
  }
    , [inputValue])
  
  
  function handleClick(value) {
    setInputValue(prevValue => prevValue + value)
  }
  
  useEffect(() => {
    function handleKeyPress(event) {
      if (numbers.includes(event.key) || operators.includes(event.key)) { 
        setInputValue(prevValue => prevValue + event.key)
      }
  }

  window.addEventListener("keydown", handleKeyPress);

  return () => {
    window.removeEventListener("keydown", handleKeyPress);
  };
  }, []);
 
  function handleClear() {
    setInputValue("")
    setAnswer("")
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
        <button onClick={handleClear}>Clear</button>
      </div>
    </div>
  )
}

export default App
