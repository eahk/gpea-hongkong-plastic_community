import React from 'react'
import './index.scss'
//
import banner1 from '../../assets/images/GP0STRETY_Medium_res.jpg'
//
export default props => {
  return (
    <section className='section section-hero hero'>
      <div
        className='hero-background'
        style={{
          backgroundImage: `url(${banner1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      <div className='hero-body'>
        <h1 className='title is-3'>2020年，讓走塑社區遍地開花！</h1>
        <h2 className='subtitle is-4'>
          2020年我們迫切需要展開更多行動：讓走塑社區遍地開花，推動全港1,000間店鋪加入走塑行列，以及令大埔成為下一個走塑模範社區。
        </h2>
      </div>
      {/*
			<div className="hero-foot">
				<nav className="tabs">
					<div className="container">
						<ul>
							<li className="is-active">
								<a href="/#">Overview</a>
							</li>
							<li>
								<a href="/#">Modifiers</a>
							</li>
							<li>
								<a href="/#">Grid</a>
							</li>
							<li>
								<a href="/#">Elements</a>
							</li>
							<li>
								<a href="/#">Components</a>
							</li>
							<li>
								<a href="/#">Layout</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
			*/}
    </section>
  )
}
