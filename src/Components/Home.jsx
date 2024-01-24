
import React from 'react'
import Work from '../Components/Work'
import Website_trafice from './Website_trafice'
import Servises from './Servises' 
import Projects from '../Components/Projects'
import Client_love from '../Components/Client_love'
import Contect from '../Components/Contect'
import Blogs from './Blogs'
import Hero from '../Components/Hero'

function Home() {
  return (
   <>
   <Hero/>
   <Work/>
   <Website_trafice/>
   <Servises/>
   <Projects/>
   <Client_love/>
   <Contect/>
   <Blogs/>

   </>
  )
}

export default Home