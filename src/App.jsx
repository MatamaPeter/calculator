import "./App.css"
function App() {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
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
          <div className="display"></div>
          <div className="input"></div>
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
    </div>
  )
}

export default App
