import React from 'react'
import './pricing.css'

const Pricing = () => {
  return (
    <div className='pricing'>
      <div class="pricing-header px-3 py-3 pt-md-5 pb-md-2 mx-auto text-center">
      <h1 class="display-4 text-white">Pricing</h1>
      <p class="lead text-white">You can start receiving mail by choosing one of the packages that are suitable for you.</p>
    </div>
    <div class="container pb-2">
      <div class="card-deck mb-3 mt-5 text-center d-flex justify-content-center">
        <div class="card mb-4 box-shadow m-1">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Free</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$0 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>30 day trial</li>
              <li>English Story</li>
              <li><del>English Words Card</del></li>
              <li><del>English Newspaper</del></li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow text-muted m-1">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Pro</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$15 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>6 month subscription</li>
              <li>English Story</li>
              <li>English Words Card</li>
              <li>English Newspaper</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign Up</button>
          </div>
        </div>
        <div class="card mb-4 box-shadow text-muted m-1">
          <div class="card-header">
            <h4 class="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div class="card-body">
            <h1 class="card-title pricing-card-title">$29 <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
              <li>365 days subscription</li>
              <li>English Story</li>
              <li>English Words Card</li>
              <li>English Newspaper</li>
            </ul>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up</button>
          </div>
        </div>
      </div>
    </div>
    </div>
       
  )
}

export default Pricing