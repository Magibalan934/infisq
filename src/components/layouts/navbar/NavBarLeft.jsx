import { NavLink } from "react-router-dom";

export default function NavBarLeft() {
  return (
    // nav bar left logo
    <div className="logo">
      <NavLink to="/">
        <img src="logo.png" alt="logo" />
      </NavLink>
    </div>
  );
}
