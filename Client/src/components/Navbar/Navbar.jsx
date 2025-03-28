import React from 'react'
import './Navbar.css'
function Navbar({page}) {

  return (
    <>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${page == 'Home' ? 'home' : ''}`} >
        <div className="container-fluid">
          <img src='../src/assets/logo/logo.png' alt='Ghar Logo' className='logoGhar'></img>
          {/* <a className="navbar-brand" href="#">Navbar</a> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              
            </form>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For buyer</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For tenant</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For owner</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">For agents</a>
              </li>
            </ul>
            <div className='post_property'>
              Post Property
            </div>
            <div className='post_property'>
              Guest 
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar