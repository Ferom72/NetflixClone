import React, { useEffect, useState } from "react";
import Logo from "../Images/Netflix_2015_logo.svg.png";
import Avatar from "../Images/Netflix-avatar.png";
import "../MyStyles/nav.css";

function Navbar() {
  const [show, setHandleShow] = useState(false); // Initialize with false

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setHandleShow(true);
      } else {
        setHandleShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll); // Pass the same listener function
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={Logo} alt="Netflix Logo" />
      <img className="nav_avatar" src={Avatar} alt="user avatar" />
    </div>
  );
}

export default Navbar;
