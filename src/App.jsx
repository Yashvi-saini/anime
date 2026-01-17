import React from 'react'
import Hero from './components/Hero.jsx'
const App =()=>{
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
   <Hero/>
   <section className="z-0 bg-blue-500 min-h-screen"/>
    </main>
  )
}

export default App
