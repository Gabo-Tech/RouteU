import React from 'react'
import { Nav, Anchor} from 'grommet';
import {HomeRounded, Compass,User } from 'grommet-icons';
import { Link } from 'react-router-dom';
export default function AppBar() {
  return (
    <>
      <Nav id="AppBar" direction="row" background="brand" pad="medium">
        <Link to="/routes"><Anchor  icon={<HomeRounded />} hoverIndicator /></Link>
        <Link to="/form"><Anchor  icon={<Compass />} hoverIndicator /></Link>
        <Link to="/profile"><Anchor  icon={<User />} hoverIndicator /></Link>
      </Nav>
    </>
  )
}