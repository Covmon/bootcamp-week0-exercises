import React from 'react'
import { NavBarContainer, NavBarItem } from './styles'

const NavBar = () => (
  <NavBarContainer>
    <NavBarItem>
      Today
    </NavBarItem>
    <NavBarItem selected>
      Todos
    </NavBarItem>
  </NavBarContainer>
)

export default NavBar
