import React from 'react'
import './LargeCafe.css'
import c10 from './../images/c10.jpg'
import c1 from './../images/c1.jpg'
import c9 from './../images/c9.jpg'
import c8 from './../images/c8.jpg'
import c7 from './../images/c7.jpg'
import c6 from './../images/c6.jpg'
import c5 from './../images/c5.jpg'
import c4 from './../images/c4.jpg'
import c3 from './../images/c3.jpg'
import c2 from './../images/c2.jpg'

function LargeCafe() {
  return (
    <div>
      <div className='bed-img-container'>
        <section class="portfolio-w3ls" id="gallery">
          <h3 class="bed-heading">Bedrooms</h3>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c2} class="responsive" alt="/" />

          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c10} class="responsive" alt="/" />

          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c8} class="responsive" alt="/" />


          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c4} class="responsive" alt="/" />


          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c5} class="responsive" alt="/" />

          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c7} class="responsive" alt="/" />

          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c6} class="responsive" alt="/" />

          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c1} class="responsive" alt="/" />


          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c8} class="responsive" alt="/" />


          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c10} class="responsive" alt="/" />


          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c3} class="responsive" alt="/" />


          </div>
          <div class="col-md-3 gallery-grid gallery1">
            <img src={c1} class="responsive" alt="/" />


          </div>
          <div class="clearfix"> </div>
        </section>
      </div>
    </div>
  )
}

export default LargeCafe
