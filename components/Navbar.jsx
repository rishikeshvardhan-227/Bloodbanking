import {
  Heart,
  UserRound,
  Menu,
  X,
  LayoutDashboard,
  Search,
  UserPlus,
  Hospital,
  Info
} from "lucide-react";

import { useState } from "react";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      {/* LOGO */}

      <a
        href="/"
        className="logo"
        onClick={closeMenu}
      >

        <div className="logo-icon">
          <Heart
            size={20}
            fill="white"
          />
        </div>

        <span>
          Blood<span>Care</span>
        </span>

      </a>


      {/* DESKTOP NAVIGATION */}

      <div className="nav-links">

        <a href="/">
          Home
        </a>

        <a href="/dashboard">
          <LayoutDashboard size={15} />
          Dashboard
        </a>

        <a href="/find-blood">
          <Search size={15} />
          Find Blood
        </a>

        <a href="/donate">
          <UserPlus size={15} />
          Donate
        </a>

        <a href="/hospitals">
          <Hospital size={15} />
          Hospitals
        </a>

        <a href="/about">
          <Info size={15} />
          About
        </a>
        <a href="/emergency">Emergency</a>
        <a href="/donors">Donors</a>

      </div>


      {/* LOGIN / REGISTER */}

      <div className="nav-actions">

        <a
          href="/login"
          className="login-btn"
        >
          <UserRound size={17} />
          Login
        </a>

        <a
          href="/register"
          className="register-btn"
        >
          Register
        </a>

      </div>


      {/* MOBILE MENU BUTTON */}

      <button
        className="mobile-menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen
          ? <X size={24} />
          : <Menu size={24} />
        }

      </button>


      {/* MOBILE MENU */}

      {menuOpen && (

        <div className="mobile-menu">

          <a
            href="/"
            onClick={closeMenu}
          >
            Home
          </a>

          <a
            href="/dashboard"
            onClick={closeMenu}
          >
            Dashboard
          </a>

          <a
            href="/find-blood"
            onClick={closeMenu}
          >
            Find Blood
          </a>

          <a
            href="/donate"
            onClick={closeMenu}
          >
            Donate
          </a>

          <a
            href="/hospitals"
            onClick={closeMenu}
          >
            Hospitals
          </a>

          <a
            href="/about"
            onClick={closeMenu}
          >
            About
          </a>

          <a
            href="/login"
            onClick={closeMenu}
          >
            Login
          </a>

          <a
            href="/register"
            onClick={closeMenu}
          >
            Register
          </a>

        </div>

      )}

    </nav>

  );
}

export default Navbar;