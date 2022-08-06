import { Link, useMatch, useResolvedPath } from "react-router-dom";
import fonts from "./fonts.module.css";

export default function Navbar() {
  return (
    <nav className="nav" style={{ marginTop: "1%" }}>
      <ul>
        <CustomLink to="/">home</CustomLink>
        <CustomLink to="/about">about</CustomLink>
        <CustomLink to="/work">work</CustomLink>
        <CustomLink to="/projects">projects</CustomLink>
        <CustomLink to="/contact">contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link className={fonts.poppinssemibold} to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
