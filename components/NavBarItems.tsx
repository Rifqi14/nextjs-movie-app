import { NAVBAR } from "@/types/navbar";
import { Link, NavbarContent, NavbarItem } from "@nextui-org/react";
import React from "react";

export default function NavBarItems() {
  return (
    <NavbarContent className="hidden sm:flex gap-8" justify="center">
      {NAVBAR &&
        NAVBAR.map((navbar) => (
          <NavbarItem key={navbar.url}>
            <Link color="foreground" href={navbar.url}>
              {navbar.title}
            </Link>
          </NavbarItem>
        ))}
    </NavbarContent>
  );
}
