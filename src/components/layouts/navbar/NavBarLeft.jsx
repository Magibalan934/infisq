import { NavLink } from "react-router-dom";

export default function NavBarLeft() {
  return (
    <div className="logo">
      <NavLink to="/">
        <img src="logo.png" alt="logo" />
      </NavLink>
    </div>
  );
}
