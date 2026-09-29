"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "Inicio",
    href: "/admin",
  },
  {
    name: "Login",
    href: "/admin/login",
  },
  {
    name: "Usuarios",
    href: "/admin/users",
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-1">
      {links.map((link) => {

        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-[#2D4167] text-white"
                : "text-slate-300 hover:bg-slate-800 hover:text-white"
            }`}
          >

            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}