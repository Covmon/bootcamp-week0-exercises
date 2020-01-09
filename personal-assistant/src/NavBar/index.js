import React from 'react'
import { NavBarContainer, NavBarItem } from './styles'

const NavBar = () => (
  <NavBarContainer>
    <NavBarItem selected>
      Todos
    </NavBarItem>
    <NavBarItem>
      Today
    </NavBarItem>
  </NavBarContainer>
)

export default NavBar
