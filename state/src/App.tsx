import './App.css'
import React from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './Hero'


const App: React.FC = () => {
  return (
    <div>
      <NavBar />
      <Hero />
    </div>
  )
}

export default App
