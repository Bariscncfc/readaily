import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg  bg  ">
  <div className="container">
    <a className="navbar-brand text-dark" href="#">Readaily</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="nav navbar-nav w-100 justify-content-center ">
        <li className="nav-item">
          <a className="nav-link active text-dark" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Discover</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-dark" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Navbar