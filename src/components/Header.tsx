'use client'

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navLinks = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/posts",
    label: "Posts",
  },
  {
    href: "/new-post",
    label: "New Post",
  },
];

const Header = () => {

  const pathname = usePathname();

  return (
    <header className="flex flex-row justify-between items-center py-4 px-7 border-b-2">
      <div>
        <Link href="/">
        <Image
          src="https://bytegrad.com/course-assets/youtube/example-logo.png"
          className="w-[35] h-[35]"
          width={35}
          height={35}
          alt="Logo"
        />
        </Link>
        
      </div>
      <div>
        <ul className="flex gap-x-5 text-[14px]">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link className={`${pathname === link.href ? "text-zinc-900" : "text-zinc-400"}`}
              href={link.href}
              >{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
