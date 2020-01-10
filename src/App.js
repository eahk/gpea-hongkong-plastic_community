import React from 'react'
// vendor
import 'sanitize.css'
import 'bulma/css/bulma.css'
import 'flexboxgrid/css/flexboxgrid.min.css'
import 'swiper/css/swiper.css'
// custom
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
  position: 'relative',
  height: '100%'
}
const sticky = {
  position: 'sticky',
  top: '20px'
}
function App() {
  return (
    <div className='App'>
      <Header />
      <main className='main row'>
        <section className='main-left col-lg-8'>
          <Hero />
          <Intro />
        </section>
        <section className='main-right col-lg-4'>
          <aside className='aside' style={stickyContainer}>
            <div style={sticky}>
              <EnForm />
            </div>
          </aside>
        </section>
      </main>
      <article>
        {/*
			<PlasticCommunity />
			<BillBoard />
			*/}
        <Testimonial />
      </article>
      <Footer />
    </div>
  )
}

export default App
