import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Card from './components/Card'


function App() {
  let myObj = {
    username: "hitesh",
    age: 21,
  }
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl  mb-4">
        Tailwind Test
      </h1>

      <Card username ="chaiaurcode" btnText="Click ME"/>
      <Card username="hitesh" btnText="Visit Me"/>


      

    </>
  )
}

export default App