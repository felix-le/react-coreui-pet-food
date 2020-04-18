import React, {useState} from "react";
import { Nav, NavItem, NavLink, Progress, TabContent, TabPane, ListGroup, ListGroupItem } from 'reactstrap';
import classNames from 'classnames';

const DefaultAside = () => {
  const [tab, setTab] = useState({
    id: Math.random(),
    icon: {
      list: 'icon-list',
      speech: 'icon-speech',
      settings: 'icon-settings'
    },
  })

  const toggle = (id) => {
    console.log(tab.id)
  }

  const NavRightTab = () =>{
    return (
      // <NavItem>
      //   <NavLink onClick={(id) =>toggle(id)}>
      //     <i className="icon-" ></i>
      //   </NavLink>
      // </NavItem>
      <p>this is navright tab</p>
    )
  }

  return(
    <>
      <p>this is right tab</p>
      <Nav tabs>
        <NavRightTab />
      </Nav>
    </>
  )
};
// this is right nav right tab
export default DefaultAside;
