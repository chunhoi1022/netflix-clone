import React, { useEffect, useState } from "react";
import "../css/NavBar.css";

function NavBar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show ? "nav_black" : ""}`}>
      <img
        className="nav_logo"
        src="https://www.howtogeek.com/thumbcache/2/200/8577f634f562645972c7a73dcae8ccdd/wp-content/uploads/2020/02/netflix_logo.png"
        alt="Netflix Logo"
      />
      <img
        className="nav_avatar"
        src="https://i.pinimg.com/originals/fb/8e/8a/fb8e8a96fca2f049334f312086a6e2f6.png"
        alt="Netflix Avatar"
      />
    </div>
  );
}

export default NavBar;
