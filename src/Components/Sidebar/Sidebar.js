import {
  FaChartPie,
  FaCog,
  FaBars,
  FaHome,
  FaHotel,
  FaSignOutAlt,
  FaTimes,
} from "react-icons/fa";

import "./sidebar.css";
import { NavLink } from "react-router-dom";
import { memo, useRef, useState } from "react";

const Sidebar = () => {
  const sidebarRef = useRef();
  const [isSidebarVisible, setSidebarVisbility] = useState(false);

  const openSidebar = () => {
    sidebarRef.current.style.display = "block";
    setSidebarVisbility(true);
  };

  const closeSidebar = () => {
    sidebarRef.current.style.display = "none";
    setSidebarVisbility(false);
  };

  return (
    <>
      {isSidebarVisible ? (
        <FaTimes className="sidebar__toggle__icon" onClick={closeSidebar} />
      ) : (
        <FaBars className="sidebar__toggle__icon" onClick={openSidebar} />
      )}
      <nav id="sidebar" className="flex-center" ref={sidebarRef}>
        <ul>
          <li title="React Restaurant" style={{ background: "none" }}>
            <NavLink
              aria-disabled="true"
              style={{
                background: "hsla(11,80%,45%,1)",
                borderRadius: "12px",
                boxShadow: "none",
              }}
            >
              <FaHotel />
            </NavLink>
          </li>
          <li>
            <NavLink to="/" title="Home">
              <FaHome />
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" title="Settings">
              <FaCog />
            </NavLink>
          </li>
          <li>
            <NavLink to="/reports" title="Reports">
              <FaChartPie />
            </NavLink>
          </li>
          <li>
            <FaSignOutAlt title="Sign Out" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default memo(Sidebar);
