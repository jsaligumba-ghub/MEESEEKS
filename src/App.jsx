import About from './section/About'
import Hero from './section/Hero'
import { useState } from 'react'
import Tokenomics from './section/Tokenomics'
import Investors from './section/Investors'
import Contract from './section/Contract'
import Buyy from './section/Buyy'
import Community from './section/Community'

function App() {

  return (
    <div className='relative w-full h-full'>
  <img src='me6.jpg' alt='rsbg' className='fixed bg-cover blur-[2px] invert-25'/>


      <Hero />
      <About />
      <Investors />
      <Tokenomics />
      <Contract />
      <Buyy />
      <Community />

    </div>
  )
}

export default App
