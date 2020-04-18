import React from "react";
import { Link } from "react-router-dom";

const DefaultSideBarNav = () => {
  const navItems = [
    {
      id: Math.random(),
      icon: "icon-speedometer",
      name: "Dashboard",
      path: "Dashboard",
      span: "badge badge-info",
      contentSpan: " NEW",
    },
    {
      id: Math.random(),
      icon: "icon-drop",
      name: "Login",
      path: "login",
    }
  ];
  // "nav-icon" ${item.icon} 
  const NavItem = () => {
    return(
      navItems.map((item) => {
        return(
          <li className="nav-item" key={item.id}>
            <Link to={item.path} className="nav-link">
              <i className={`nav-icon ${item.icon} `}/>
              {item.name}
                {item.span ? 
                (<span className="{item.span}">{item.contentSpan}</span>) :(null)
              }
            </Link>
          </li>
        )
      })
    )
  }

  return (
    <div className="ant-layout-sider">
      <div className="ant-layout-sider-children">
        <ul className="nav">
        <NavItem />
        </ul>
      </div>
    </div>
  );
};

export default DefaultSideBarNav;
