import { NavLink } from "react-router-dom";

export default function NavBarLeft() {
  return (
    <div className="logo w-50  md:w-60 lg:75">
      <NavLink to="/">
        <img src="logo.png" alt="logo" className="h-full w-full object-contain" />
      </NavLink>
    </div>
  );
}
