import { NavLink } from "react-router-dom";
import { navItems } from "../../../data/navItems";

export default function NavBarRight() {
  return (
    // nav bar right nav items
    <ul className="w-[30%] flex justify-between">
      {navItems.map((item) => {
        return (
          <li key={item.id} className="text-xl">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navItem-active" : "hover:text-primary"
              }
            >
              {item.label}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
}
