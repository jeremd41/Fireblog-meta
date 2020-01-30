import React, { useState } from "react";
import { Link } from "gatsby";
import classNames from "classnames";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const navBarMenuClassNames = classNames({
    "navbar-menu": true,
    "is-active": showMobileMenu
  });
  const burgerClassNames = classNames({
    "navbar-burger burger": true,
    "is-active": showMobileMenu
  });

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link to={"/"} className="navbar-item">
            <img src="/images/logo.png" alt="Logo" />
          </Link>
          <span
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className={burgerClassNames}
            data-target="navbarMenuHeroA"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenuHeroA" className={navBarMenuClassNames}>
          <div className="navbar-end">
            <Link to={"/"} className="navbar-item is-active">
              Home
            </Link>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://fireblogcms.com"
              className="navbar-item"
            >
              Fireblog
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;