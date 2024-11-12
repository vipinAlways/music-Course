"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
  const [Active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        <Link href={"/"}>
          <MenuItem
            setActive={setActive}
            active={Active}
            item="Home"
          ></MenuItem>
        </Link>
        <Link href={"/courses"}>
          <MenuItem
            setActive={setActive}
            active={Active}
            item="Our Coruses"
          ></MenuItem>
        </Link>
        
        <Link href={"/contact"}>
          <MenuItem
            setActive={setActive}
            active={Active}
            item="Contact US"
          ></MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Navbar;
