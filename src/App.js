import React from 'react'
//
import 'sanitize.css'
import 'bulma/css/bulma.css'
import 'swiper/css/swiper.css'
import './App.css'
import './App.scss'
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
const stickyContainer = {
  position: 'relative'
}
const sticky = {
  position: 'sticky',
  top: '20px'
}
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='main__grid'>
        <div className='main-grid__item content'>
          <Hero />
          <Intro />
          {/*
			<PlasticCommunity />
			<BillBoard />
			*/}
          <Testimonial />
        </div>
        <div className='main-grid__item' style={stickyContainer}>
          <div style={sticky}>
            <EnForm />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default App
