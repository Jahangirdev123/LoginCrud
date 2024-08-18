import React from 'react'
import {AppBar,Toolbar, Typography,styled} from "@mui/material"

import { NavLink } from 'react-router-dom'

const Header=styled(AppBar)`
background:#111111;

`
const StyledTypography = styled(NavLink)`
margin-right: 20px;
text-decoration:none;
color:inherit;
  cursor: pointer;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`

function Navbar() {
  return (
    <Header position='static'>
      <Toolbar>
        <StyledTypography >Assignment no 16</StyledTypography>
        <StyledTypography to="/AllUsers">All Users</StyledTypography>
        <StyledTypography to="/Add">Add User</StyledTypography>
        <StyledTypography to="/Login">Login </StyledTypography>
        <StyledTypography to="/SignUp">SignUp </StyledTypography>
      </Toolbar>
    </Header>
      )
}

export default Navbar