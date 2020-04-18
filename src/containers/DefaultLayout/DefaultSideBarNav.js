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
      active: false,
    },
    {
      id: Math.random(),
      name: "THEME",
    },
    {
      id: Math.random(),
      icon: "icon-drop",
      name: "Login",
      path: "login",
    },
    {
      id: Math.random(),
      name: "COMPONENTS",
    },
    {
      id: Math.random(),
      icon: "icon-puzzle",
      name: "User Profile",
      path: "profile",
      active: false,
      children: true,
    },
  ];

  // Bây giờ làm thế nào với trường hợp chỉ render ra cái title thôi? Nếu dùng cái if not ... path, icon thì dài quá ...
  // "nav-icon" ${item.icon}
  const NavItem = () => {
    return (
      <div className="sidebar-wrapper">
        {navItems.map((item) => {
          return (
            <>
              {item.path ? (
                <li className="nav-item" key={item.id}>
                  <Link
                    to={item.path}
                    className={`nav-link ${item.active ? "active" : ""}${
                      item.children ? "nav-dropdown-toggle" : ""
                    }`}
                  >
                    <i className={`nav-icon ${item.icon} `} />
                    {item.name}
                    {item.span ? (
                      <span className="{item.span}">{item.contentSpan}</span>
                    ) : null}
                  </Link>
                </li>
              ) : (
                <li className="nav-title">{item.name}</li>
              )}
            </>
          );
        })}
      </div>
    );
  };

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
