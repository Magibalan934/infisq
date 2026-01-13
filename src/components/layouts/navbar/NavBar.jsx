import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

export default function NavBar() {
  return (
    <nav className="h-20 w-full max-w-350 bg-white  fixed z-100 flex justify-between px-3 md:w-[90%] mx-auto  md:px-10 items-center md:rounded-xl shadow-primary">
      <NavBarLeft />
      <NavBarRight />
    </nav>
  );
}
