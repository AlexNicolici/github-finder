import React from "react";
import { Link } from "react-router-dom";

function Navbar({
  title = "Github Finder",
  icon = "fab fa-github",
}: {
  title?: string;
  icon?: string;
}) {
  return (
    <nav className="navbar bg-primary">
      <Link to="/">
        <h1>
          <i className={icon} style={{ marginRight: 5 }} />
          {title}
        </h1>
      </Link>
      <ul>
        <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
