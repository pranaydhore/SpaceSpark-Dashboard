import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsMobileMenuOpen(false); // close mobile menu on click
  };

  const handleProfileClick = () => setIsProfileDropdownOpen(!isProfileDropdownOpen);

  const handleLogout = () => {
    if (window.confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");
      alert("You have been logged out successfully!");
      setTimeout(() => {
        window.location.href = "https://space-spark-frontend.vercel.app/";
      }, 500);
    }
  };

  const handleProfileOption = (option) => {
    setIsProfileDropdownOpen(false);
    switch (option) {
      case "profile": navigate("/profile"); break;
      case "settings": navigate("/settings"); break;
      case "analytics": navigate("/analytics"); break;
      case "reports": navigate("/reports"); break;
      case "help": navigate("/help"); break;
      case "logout": handleLogout(); break;
      default: break;
    }
  };

  const getUserInitials = () => {
    if (user?.name) return user.name.split(" ").map(n => n[0]).join("").toUpperCase();
    if (user?.email) return user.email.substring(0,2).toUpperCase();
    return "ZU";
  };

  return (
    <div className="menu-container">
      {/* Logo and Mobile Hamburger */}
      <div className="menu-header">
        <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
        <button 
          className="hamburger"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      <div className={`menus ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          {[
            { label: "Dashboard", icon: "icon-dashboard", path: "/" },
            { label: "Orders", icon: "icon-orders", path: "/orders" },
            { label: "Holdings", icon: "icon-holdings", path: "/holdings" },
            { label: "Positions", icon: "icon-positions", path: "/positions" },
            { label: "Funds", icon: "icon-funds", path: "/funds" },
            { label: "Apps", icon: "icon-apps", path: "/apps" }
          ].map((menu, idx) => (
            <li key={idx}>
              <Link 
                to={menu.path} 
                style={{ textDecoration: "none" }}
                onClick={() => handleMenuClick(idx)}
              >
                <p className={selectedMenu === idx ? "menu selected" : "menu"}>
                  <i className={menu.icon}></i>
                  {menu.label}
                </p>
              </Link>
            </li>
          ))}
          <li>
            <button className="btn btn-danger w-100" onClick={handleLogout}>
              Logout
            </button>
          </li>
        </ul>

        <hr />

        {/* Profile Section */}
        <div className="profile-section" ref={dropdownRef}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{getUserInitials()}</div>
            <div className="user-info">
              <p className="username">{user?.name || user?.email || "User"}</p>
              <span className="user-status">Online</span>
            </div>
            <div className={`dropdown-arrow ${isProfileDropdownOpen ? "open" : ""}`}>▼</div>
          </div>

          {isProfileDropdownOpen && (
            <div className="profile-dropdown">
              <div className="dropdown-header">
                <div className="avatar-large">{getUserInitials()}</div>
                <div className="user-details">
                  <h4>{user?.name || "User Name"}</h4>
                  <p>{user?.email || "user@example.com"}</p>
                </div>
              </div>
              <ul className="dropdown-menu">
                <li onClick={() => handleProfileOption("logout")} className="logout-option">
                  <i className="icon-logout"></i> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .menu-container {
          width: 250px;
          background: #fff;
          border-right: 1px solid #e1e5e9;
          padding: 10px;
        }

        /* Hamburger for mobile */
        .menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .hamburger {
          display: none;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .menu-container {
            width: 100%;
            padding: 10px;
          }
          .menus {
            display: none;
          }
          .menus.open {
            display: block;
          }
          .hamburger {
            display: block;
          }
        }

        ul { list-style: none; padding: 0; margin: 0; }
        li { margin-bottom: 10px; }
        .menu { font-size: 14px; padding: 8px; }
        .menu.selected { background-color: #e7f1ff; font-weight: bold; }

        /* Keep your profile and dropdown styles */
      `}</style>
    </div>
  );
};

export default Menu;
