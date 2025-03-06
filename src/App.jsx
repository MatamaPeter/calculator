import { useState } from "react"
import "./App.css"
import { useEffect } from "react"
function App() {
  const [inputValue, setInputValue] = useState()
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "%", "."]

  useEffect(() => {
    setTimeout(() => {
      try {
        console.log(eval(inputValue));
      } catch (e) {
        console.error(e);
      }
    },1000)
  }
  ,[inputValue])
  
 
  

  const operators = ["+","/","-","*"]

  const numberElements = numbers.map((number) => {
    return <button key={number}>{number}</button>
  })
  const operatorElements = operators.map((operator) => {
    return <button key={operator}>{operator}</button>
  })

  
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
            {inputValue}
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
