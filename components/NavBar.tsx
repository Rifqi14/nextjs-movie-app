import { Navbar, NavbarBrand } from "@nextui-org/react";
import NavBarItems from "./NavBarItems";
import NavBarActions from "./NavBarActions";

export default function NavBar() {
  return (
    <Navbar maxWidth="full" className="px-16 py-3">
      <NavbarBrand>
        <p className="font-bold text-4xl">MOVIE</p>
      </NavbarBrand>
      <NavBarItems />
      <NavBarActions />
    </Navbar>
  );
}
