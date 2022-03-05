import React from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const path = location.pathname.split("/");
  const endpoint = path[path.length - 1];
  return (
    <header className="header bg-secondary text-font text-center">
      <nav>
        <ul className="grid  grid-cols-2 items-center py-4 px-1 sm:px-4">
          <li className={endpoint === "" ? "link-lighted" : "link"}>
            <Link to="/">Home</Link>
          </li>
          <li className={endpoint === "upcoming" ? "link-lighted" : "link"}>
            <Link to="/launches/upcoming">Upcoming</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
