import React from "react";
import { Link } from "react-router-dom";

const DefaultSideBarNav = () => {
  // Truờng hợp khi bấm vào link thay vì chuyển trang thì nó lại đứng im tại chỗ?
  // Giải bài toán cái dropdown trong trường hợp này như nào? chắc phải lồng obj trong obj
  // link https://coreui.io/react/demo/#/dashboard -- phần base?

  return (
    <div className="ant-layout-sider">
      <div className="ant-layout-sider-children">
        <ul className="nav">
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <div class="nav__parent">Management</div>
            <input type="checkbox" />
            <ul>
              <li>
                <Link to="/food">Food</Link>
              </li>
              <li>
                <Link to="/user">User</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultSideBarNav;
