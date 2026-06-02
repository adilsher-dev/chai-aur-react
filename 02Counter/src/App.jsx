import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  let [counter,setCounter] = useState(15)//[value,function]

  //let counter = 5;

  const addValue = () => {
    console.log("value added", counter);
    counter = counter + 1;
    if(counter > 20){
      counter = 20;
    }
    else{
    setCounter(counter);
    }
  }
  const removeValue = () => {
    counter = counter - 1;
    if(counter < 0 ){
      counter = 0;
    }
    else{
    setCounter(counter);
    }
  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value : {counter}</h2>

      <button onClick={addValue}>
        Add Value : {counter}
      </button>

      <br /><br />

      <button onClick={removeValue}>
        Remove Value : {counter}
      </button>
      
    </>
  )
}

export default App
