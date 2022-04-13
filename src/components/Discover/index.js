import React from 'react'
import image1 from '../../images/image1.svg'
import image2 from '../../images/image2.svg'
import image3 from '../../images/image3.svg'
import './discover.css'

const Discover = () => {
  return (
    <div className='discover bg-light'>
      <div className='container pt-5 pb-5'>
          <h1 className='text-center mb-5 pb-2 border-bottom text-dark' id='section1-title'>DISCOVER</h1>
          <div className='row'>
              <div className='col-md-6 pt-5 d-flex flex-column justify-content-center align-items-center '>
                  <h1 className='text-dark'>DAILY EMAILS</h1>
                  <p className='text-dark'>Receive daily emails after signing up</p>
              </div>
              <div className='col-md-6  d-flex justify-content-center  '>
                  <img className='w-75' src={image1}/>
              </div>
          </div>
      </div>
      <div className='container  pt-5 pb-5'>
          <div className='row'>
          <div className='col-md-6 d-flex flex-column justify-content-center align-items-center'>
                  <img className='w-75'  src={image3}/>
              </div>
              <div className='col-md-6 d-flex flex-column justify-content-center align-items-center mt-5'>
                  <h1 className='text-dark'>LEARN ENGLISH</h1>
                  <p className='text-dark'>improve your english by reading english text</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Discover