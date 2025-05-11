import React, { useState } from "react";
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { Link } from "react-router-dom";
import "./styles.scss";

const NavLink = [
  {
    label: "Home",
    to: "/",
  },
  {
    label: "About",
    to: "/About",
  },
  {
    label: "Contact",
    to: "/Contact",
  },
  {
    label: "Portfolio",
    to: "/Portfolio",
  },
  {
    label: "Resume",
    to: "/Resume",
  },
  {
    label: "Skills",
    to: "/Skills",
  },
];

const Navbar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);

  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  return (
    <div>
      <nav className="navBar">
        <div className="navBar__Container">
          <Link to={"/"} className="navBar__Container__logo">
            <FaReact size={30} />
          </Link>
        </div>
        <ul className= {`navBar__Container__menu ${toggleIcon ? "active" : ""}`}>
          {NavLink.map((item, PageName) => (
            <li key={PageName} className="navBar__Container__menu__title">
              <Link className="navBar__Container__menu__links" to={item.to}>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={handleToggleIcon}>
        {
            toggleIcon ? <HiX size={30}/> : <FaBars size={30}/> 
        }
            </div>
      </nav>
    </div>
  );
};

export default Navbar;
