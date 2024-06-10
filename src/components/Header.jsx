import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="justify-between h-[10vh] items-center p-2 flex shadow">
      <strong>Logo</strong>

      <nav className="space-x-4">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink
          to="/login"
          className="p-3 rounded-md bg-blue-500 text-white hover:bg-blue-600"
        >
          Login
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
