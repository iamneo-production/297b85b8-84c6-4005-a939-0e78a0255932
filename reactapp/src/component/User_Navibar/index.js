import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <>
      <Nav>
          <NavLink to="/">
              
          </NavLink>
          <Bars />
          <NavMenu>
              <NavLink to="/home" activeStyle>
                Home
              </NavLink>
              <NavLink to="/cart" activeStyle>
                Cart
              </NavLink>
              <NavLink to="/orders" activeStyle>
                My orders
              </NavLink>
          </NavMenu>
         </Nav>
      </>
    
  )
}

export default Navbar