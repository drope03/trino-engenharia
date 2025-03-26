"use client";

import Link from "next/link";

const links = [
  { href: "", label: "Termos de Uso" },
  { href: "", label: "Política de Privacidade" },
];

export function TermsPolicysAndContact() {
  return (
    <div className="flex flex-col gap-2">
      {links.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-white/60 hover:text-highlight transition-all ease-in-out cursor-pointer"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
