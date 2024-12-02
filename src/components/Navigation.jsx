import React from 'react'
import { Menu } from 'antd'
import { NavLink } from 'react-router-dom'
import RoutesEnum from '../enum/RoutesEnum'
const { Item } = Menu; const Navigation = () => (
  <Menu mode="horizontal">
    <Item key="home">
      <NavLink to={RoutesEnum.TODO_LIST}>Home</NavLink>
    </Item>
    <Item key="done-list">
      <NavLink to={RoutesEnum.DONE_LIST}>Done List</NavLink>
    </Item>
    <Item key="help">
      <NavLink to={RoutesEnum.HELP}>Help</NavLink>
    </Item>
  </Menu>
)
export default Navigation