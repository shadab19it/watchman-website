import React, { FC } from "react";
import { Menu } from "antd";
import Logo from "../../assest/logo.svg";
import "./Header.scss";

const Header: FC = () => {
  return (
    <header className='navbar-wrapper'>
      <div className='navbar'>
        <div className='logo-wrapper'>
          <div className='brand-logo'>
            <a href='/' className=''>
              <img src={Logo} />
            </a>
          </div>
          <div className='org-name'>
            <a href='/' className='brand'>
              Shadab
            </a>
          </div>
        </div>
        <div className='nav-options'>
          <Menu mode='horizontal' className='options-panel'>
            <Menu.Item key='tool:1'>
              <a href='#' target='_blank'>
                Login
              </a>
            </Menu.Item>
            <Menu.Item key='gx-blog' className='hide-on-small'>
              <a target='_blank' href='#'>
                Blog
              </a>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </header>
  );
};

export default Header;
