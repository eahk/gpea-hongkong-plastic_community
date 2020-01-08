import React from 'react'
import './index.scss'
//
import Swiper from 'react-id-swiper'
//
const supporterData = [
  {
    name: 'Brian & Korean kid',
    headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Sharon',
    headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Tong / Chris',
    headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Tong / Chris',
    headline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const swiperParams = {
  slidesPerView: 3,
  // slidesPerView: 'auto',
  centeredSlides: true,
  grabCursor: true,
  spaceBetween: 40,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    640: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  }
}

function TestimonialCard(props) {
  return (
    <div className='card'>
      <div className='card-content'>
        <div className='card-image'>
          <figure className='image'>
            <img
              className='is-rounded'
              src='https://bulma.io/images/placeholders/128x128.png'
              alt='alt'
            />
          </figure>
        </div>
        <div className='testimonial-text'>
          <p className='headline'>{props.headline}</p>
          <p className='name'>{props.name}</p>
        </div>
      </div>
    </div>
  )
}
export default props => {
  return (
    <section>
      <div className='container'>
        <div className='testimonial-wrapper'>
          <Swiper {...swiperParams}>
            {supporterData.map((supporter, key) => (
              <div className='swiper-slide' key={key}>
                <TestimonialCard {...supporter} />
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
