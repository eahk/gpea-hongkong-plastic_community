import React from 'react'
//
import 'sanitize.css'
import 'bulma/css/bulma.css'
import 'swiper/css/swiper.css'
import './App.css'
//
import Header from './components/Header'
import EnForm from './components/EnForm'
import Intro from './components/Intro'
import Hero from './components/Hero'
// import PlasticCommunity from './components/PlasticCommunity'
// import BillBoard from './components/BillBoard'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'
//
function App() {
  return (
    <div className='App'>
      <Header />
      <EnForm />
      <Hero />
      <Intro />
      {/*
			<PlasticCommunity />
			<BillBoard />
			*/}
      <Testimonial />
      <Footer />
    </div>
  )
}

export default App
