import { Button, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";
import SecondaryButton from "./SecondaryButton";
import Iconify from "./Iconify";

export default function NavBarActions() {
  return (
    <NavbarContent justify="end">
      <NavbarItem>
        <Button isIconOnly className="bg-transparent">
          <Iconify icon={"mdi:magnify"} className="text-2xl" />
        </Button>
      </NavbarItem>
      <NavbarItem>
        <SecondaryButton>Sign Up</SecondaryButton>
      </NavbarItem>
      <NavbarItem>
        <Button color="primary">Login</Button>
      </NavbarItem>
    </NavbarContent>
  );
}
