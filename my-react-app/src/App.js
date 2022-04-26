import './App.css';
import Header from './Components/Header'
import { useState } from "react"

function App() {

  const namings = ["Nikhil", "Amit", "Jesus"]

  const newNames = namings.map((name) => {
    return <h2>{name}</h2>
  })

  return (
    <div className="App">
      <Header check='Heya' />
      <p>{newNames}</p>
    </div>
  );
}

export default App;
