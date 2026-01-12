import NavBarLeft from "./NavBarLeft";
import NavBarRight from "./NavBarRight";

export default function NavBar() {
  return (
    // nav bar container
    <nav className="bg-white h-20 w-[80%] mx-auto flex justify-between px-10 items-center rounded-xl shadow-primary fixed z-100">
      <NavBarLeft />
      <NavBarRight />
    </nav>
  );
}




// position: absolute;
// width: 1257px;
// height: 86px;
// left: 90px;
// top: 29px;

// background: #FFFFFF;
// box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
// border-radius: 19px;
