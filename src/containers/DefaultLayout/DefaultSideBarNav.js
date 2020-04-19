import React from "react";
import { Link } from "react-router-dom";

const DefaultSideBarNav = () => {
  // Truờng hợp khi bấm vào link thay vì chuyển trang thì nó lại đứng im tại chỗ?
  // Giải bài toán cái dropdown trong trường hợp này như nào? chắc phải lồng obj trong obj
  // link https://coreui.io/react/demo/#/dashboard -- phần base?

  // const _handleClick= (evt) =>{
  //   evt.preventDefault();
  //   console.log('click')
  // }
  return (
    <div className="ant-layout-sider">
      <div className="ant-layout-sider-children">
        <ul className="nav">
          <li>
            <Link to="/dashboard">
              <i className="icon-speedometer"></i>
              Dashboard
            </Link>
          </li>
          <li >
            <div class="nav__parent">
              <i className="nav-icon icon-puzzle"></i>
              Management
            </div>
            <input type="checkbox" />
            <div className="nav__icon">
              <i className="icon-arrow-right"/>
              <i className="icon-arrow-down"/>
            </div>
            <ul>
              <li>
                <Link to="/user">Users</Link>
              </li>
              <li>
                <Link to="/Food">Food</Link>
              </li>
            </ul>
          </li>
          <li> 
              <i className="nav-icon icon-wallet"></i>
              Payment
          </li><script></script>
          <li>
            <Link to="/Infor">
            <i className="icon-info"></i>
              About The Project</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DefaultSideBarNav;
