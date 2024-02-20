import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import "./dash.css";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
const Sidebar = () => {

  const user = useSelector((state) => state.auth.user);


  return (
    <div>
       <header className="headerD">
          <p>
            <label htmlFor="menu">
              <span className="fa fa-bars">
                <GiHamburgerMenu />
              </span>
            </label>
            <span className="accueil"></span>
          </p>
        </header>
      <input style={{ display: "none" }} type="checkbox" id="menu" name="" />
      <div className="sidebar">
        <div className="sidebar-brand" style={{ display: "none" }}>
          <h2>
            <span className="fa fa-user-o"></span>
            {/* <img src={logo} alt="" /> */}
          </h2>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
            <Link to="/admin" className="active">
                <span className="fa fa-home"></span>
                <span>AdminPanel</span>
              </Link>
            </li>
            <li>
            <Link to="/admin/user">
                <span className="fa fa-tasks"></span>
                <span>Users</span>
              </Link>
            </li>
            <li>
              <Link to="/admin/blog">
                <span className="fa fa-th-large"></span>
                <span>Blog</span>
              </Link>
            </li>
            <li>
              <a href="">
                <span className="fa fa-line-chart"></span>
                <span>Appointments</span>
              </a>
            </li>
            <li>
            <Link to="/admin/doclistadmin">
                <span className="fa fa-address-book"></span>
                <span>Docter List</span>
              </Link>
            </li>
            <li>
              <a href="">
                <span className="fa fa-clipboard"></span>
                <span>Blank</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa fa-money"></span>
                <span>Blank</span>
              </a>
            </li>
            <li>
              <a href="">
                <span className="fa fa-registered"></span>
                <span>Blank</span>
              </a>
            </li>

            <li>
              <a href="">
                <span className="fa fa-user"></span>
                <span>Contacts</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
