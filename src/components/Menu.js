import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Get user data from localStorage
  useEffect(() => {
    const userData = localStorage.getItem("currentUser");
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    // Show confirmation alert before logout
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear user data from localStorage
      localStorage.removeItem("currentUser");
      localStorage.removeItem("token");

      // Show success alert
      alert("You have been logged out successfully!");

      // Redirect to your frontend site
      setTimeout(() => {
        window.location.href = "https://space-spark-frontend.vercel.app/";
      }, 500); // Small delay to ensure alert is seen
    }
  };

  const handleProfileOption = (option) => {
    setIsProfileDropdownOpen(false);

    switch (option) {
      case "profile":
        navigate("/profile");
        break;
      case "settings":
        navigate("/settings");
        break;
      case "analytics":
        navigate("/analytics");
        break;
      case "reports":
        navigate("/reports");
        break;
      case "help":
        navigate("/help");
        break;
      case "logout":
        handleLogout();
        break;
      default:
        break;
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  // Get user initials for avatar
  const getUserInitials = () => {
    if (user && user.name) {
      return user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase();
    } else if (user && user.email) {
      return user.email.substring(0, 2).toUpperCase();
    }
    return "ZU";
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="Logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                <i className="icon-dashboard"></i>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                <i className="icon-orders"></i>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                <i className="icon-holdings"></i>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                <i className="icon-positions"></i>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                <i className="icon-funds"></i>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                <i className="icon-apps"></i>
                Apps
              </p>
            </Link>
          </li>
          <li>
            <Link to="/logout" className="btn btn-danger">
              Logout
            </Link>
          </li>
        </ul>
        <hr />

        {/* Enhanced Profile Section with Dropdown */}
        <div className="profile-section" ref={dropdownRef}>
          <div className="profile" onClick={handleProfileClick}>
            <div className="avatar">{getUserInitials()}</div>
            <div className="user-info">
              <p className="username">{user?.name || user?.email || "User"}</p>
              <span className="user-status">Online</span>
            </div>
            <div
              className={`dropdown-arrow ${
                isProfileDropdownOpen ? "open" : ""
              }`}
            >
              ▼
            </div>
          </div>

          {/* Profile Dropdown Menu */}
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
                <li
                  onClick={() => handleProfileOption("logout")}
                  className="logout-option"
                >
                  <i className="icon-logout"></i>
                  <span>Logout</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* CSS Styles */}
      <style jsx>{`
        .profile-section {
          position: relative;
        }

        .profile {
          display: flex;
          align-items: center;
          padding: 12px;
          cursor: pointer;
          border-radius: 8px;
          transition: background-color 0.2s ease;
        }

        .profile:hover {
          background-color: rgba(0, 0, 0, 0.05);
        }

        .avatar {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          background: linear-gradient(45deg, #667eea, #764ba2);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 14px;
          margin-right: 10px;
        }

        .user-info {
          flex: 1;
          min-width: 0;
        }

        .username {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #333;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .user-status {
          font-size: 12px;
          color: #28a745;
          font-weight: 500;
        }

        .dropdown-arrow {
          font-size: 10px;
          color: #666;
          transition: transform 0.2s ease;
        }

        .dropdown-arrow.open {
          transform: rotate(180deg);
        }

        .profile-dropdown {
          position: absolute;
          bottom: 100%;
          left: 0;
          right: 0;
          background: white;
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          border: 1px solid #e1e5e9;
          margin-bottom: 10px;
          z-index: 1000;
          animation: slideUp 0.2s ease;
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .dropdown-header {
          padding: 20px;
          text-align: center;
          background: linear-gradient(135deg, #667eea, #764ba2);
          color: white;
          border-radius: 12px 12px 0 0;
        }

        .avatar-large {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: bold;
          font-size: 18px;
          margin-bottom: 10px;
          border: 2px solid rgba(255, 255, 255, 0.3);
        }

        .user-details h4 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
        }

        .user-details p {
          margin: 5px 0 0 0;
          font-size: 14px;
          opacity: 0.9;
        }

        .dropdown-divider {
          margin: 0;
          border: none;
          height: 1px;
          background: #e1e5e9;
        }

        .dropdown-menu {
          list-style: none;
          padding: 8px 0;
          margin: 0;
        }

        .dropdown-menu li {
          display: flex;
          align-items: center;
          padding: 12px 20px;
          cursor: pointer;
          transition: background-color 0.2s ease;
          font-size: 14px;
          color: #333;
        }

        .dropdown-menu li:hover {
          background-color: #f8f9fa;
        }

        .dropdown-menu li i {
          margin-right: 12px;
          width: 16px;
          font-size: 16px;
          color: #666;
        }

        .logout-option {
          color: #dc3545 !important;
        }

        .logout-option:hover {
          background-color: #fff5f5 !important;
        }

        .logout-option i {
          color: #dc3545 !important;
        }

        /* Icon classes - you can replace these with your preferred icon library */
        .icon-user::before {
          content: "👤";
        }
        .icon-chart::before {
          content: "📊";
        }
        .icon-settings::before {
          content: "⚙️";
        }
        .icon-document::before {
          content: "📄";
        }
        .icon-help::before {
          content: "❓";
        }
        .icon-logout::before {
          content: "🚪";
        }
        .icon-dashboard::before {
          content: "📈";
        }
        .icon-orders::before {
          content: "📋";
        }
        .icon-holdings::before {
          content: "💼";
        }
        .icon-positions::before {
          content: "📍";
        }
        .icon-funds::before {
          content: "💰";
        }
        .icon-apps::before {
          content: "📱";
        }
      `}</style>
    </div>
  );
};

export default Menu;
