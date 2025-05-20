import './App.css'
import React from 'react'
import { NavBar } from './components/NavBar'
import { Hero } from './Hero'
import ScrollPlayMusic from './components/ScrollPlayMusic'
import { About } from './components/About'


const App: React.FC = () => {
  return (
    <div>
      <ScrollPlayMusic />
      <NavBar />
      <Hero />
      <About />
    </div>
  )
}

export default App
