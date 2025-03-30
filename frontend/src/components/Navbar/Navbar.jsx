import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [menu, setMenu] = useState("homepage");
  const [showProfilePopup, setShowProfilePopup] = useState(false); // State to toggle pop-up visibility
  const { loginWithRedirect, logout, user, isAuthenticated, isLoading } = useAuth0();

  console.log("User Info:", user);

  const handleProfileClick = () => {
    setShowProfilePopup(!showProfilePopup); // Toggle the pop-up visibility
  };

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt='logo' />
      </div>
      <div className="nav-menu">
        <li onClick={() => { setMenu("homepage") }}>
          <Link style={{ textDecoration: 'none', color: '#1c1c1c' }} to='/'>Home</Link>
          {menu === "homepage" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("articles") }}>
          <Link style={{ textDecoration: 'none', color: '#1c1c1c' }} to='/articles'>Articles</Link>
          {menu === "articles" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("booknow") }}>
          <Link style={{ textDecoration: 'none', color: '#1c1c1c' }} to='/booknow'>Book Now</Link>
          {menu === "booknow" ? <hr /> : null}
        </li>
        <li onClick={() => { setMenu("getrecommendations") }}>
          <Link style={{ textDecoration: 'none', color: '#1c1c1c' }} to='/getrecommendations'>Get Recommendations</Link>
          {menu === "getrecommendations" ? <hr /> : null}
        </li>
      </div>

        {!isAuthenticated && (
          <div className="nav-login">
            <button onClick={() => loginWithRedirect()}>Log In</button>
          </div>
        )}

        {isAuthenticated && (
          <div className="profile" onClick={handleProfileClick}>
            <p>Hi {user.given_name}</p>
            <img src={user.picture} alt='profile-icon' />

            {/* Profile Popup */}
            {showProfilePopup && (
              <div className="profile-popup">
                <div className="profile-popup-content">
                  <Link to="/profile">
                    <div className="profile-card">
                        <img src={user.picture} alt='profile-icon' />
                        <p>{user.email}</p>
                    </div>
                  </Link>
                  <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Log Out</button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
  );
};

export default Navbar;