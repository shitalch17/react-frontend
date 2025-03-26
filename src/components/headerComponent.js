import React from 'react'
import { Link } from 'react-router-dom'
const HeaderComponent = () => {
  return (
    <div>
      <header>
        {/* Employee Management System Title - Outside Navbar */}
      <div className="text-center bg-dark text-white py-3">
        <h1 className="fs-4 m-0">Employee Management System</h1>
      </div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark px-3'>
        <div className='container-fluid'>
          {/* <h1 className='navbar-brand mb-0 text-white fs-4'>Employee Management System</h1> */}
          <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse justify-content-end' id='navbarNav'>
            <ul className='navbar-nav me-auto'>
              <li className='nav-item'>
                <Link className='nav-link text-white fs-5' to='/'>Employee List</Link>
              </li>
              <li className='nav-item'>
                <Link className='nav-link text-white fs-5' to='/employees/addemp'>Add Employee</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
    </div>
  )
} 

export default HeaderComponent
