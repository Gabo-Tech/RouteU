import React from 'react'
import { Nav, Anchor} from 'grommet';
import {HomeRounded, Compass,User } from 'grommet-icons';
import { useNavigate } from 'react-router-dom';
export default function AppBar() {
  const navigate = useNavigate();
  const navigateMe = (place) => navigate(place);
  return (
    <>
      <Nav direction="row" background="brand" pad="medium">
        <Anchor onClick={navigateMe("/routes")} icon={<HomeRounded />} hoverIndicator />
        <Anchor onClick={navigateMe("/form")} icon={<Compass />} hoverIndicator />
        <Anchor onClick={navigateMe("/profile")} icon={<User />} hoverIndicator />
      </Nav>
    </>
  )
}