import { NavLink } from "react-router-dom";
import "./Nav.css";
import logo from "../photos/logo.png";
import { useState } from "react";

const Nav = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // تابع مشترک برای همه لینک‌ها
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); 
    if (mobileOpen) setMobileOpen(false); 
  };

  return (
    <>
 
      {mobileOpen && <div className="overlay" onClick={() => setMobileOpen(false)}></div>}

      <nav className="nav">
        <div className="nav-left">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <button
          className={mobileOpen ? "menu-btn open" : "menu-btn"}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={mobileOpen ? "nav-right open" : "nav-right"}>
          <NavLink to="/" onClick={handleLinkClick}>صفحه اصلی</NavLink>
          <NavLink to="/services" onClick={handleLinkClick}>خدمات</NavLink>
          <NavLink to="/Specialized-areas" onClick={handleLinkClick}>حوزه‌های تخصصی</NavLink>
          <NavLink to="/samplework" onClick={handleLinkClick}>نمونه‌کار</NavLink>
          <NavLink to="/contact" onClick={handleLinkClick}>ارتباط با ما</NavLink>
        </div>
      </nav>
    </>
  );
};

export default Nav;
