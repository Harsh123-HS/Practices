import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'  

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

function App(){

  let [counter , setCounter ] = useState(0)

  const addvalue = () => {
    counter++;
    console.log("clicked ", {counter})
    setCounter(counter)
  }

  const minusvalue = () => {
    counter--;
    console.log("Clicked to the minus value " , {counter});
    setCounter(counter)
  }
  return(
    <>
    <h1>Hello React</h1>
    <h4>Curreent value is {counter}</h4>
    <button
    onClick={addvalue}
    >Increase value  {counter}</button> <br/><br/>

    <button
    onClick={minusvalue}
    >Decrease Value {counter}</button>

    <p>first current value shown is {counter}</p>
    <p>second current value shown is {counter}</p>
        </>
  )
}

export default App
