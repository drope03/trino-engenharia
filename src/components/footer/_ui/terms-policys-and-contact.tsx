"use client";

import Link from "next/link";

const links = [
  { href: "/workspace/contact-us", label: "Suporte", requiresAuth: true },
  { href: "/terms-conditions", label: "Termos de Uso" },
  { href: "/policy-privacy", label: "Política de Privacidade" },
];

export function TermsPolicysAndContact() {

  return (
    <div className="flex flex-col gap-2">
      {links
        .filter(link => !link.requiresAuth) 
        .map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-light/85 hover:text-highlight transition-all ease-in-out cursor-pointer"
          >
            {link.label}
          </Link>
        ))}
    </div>
  );
}
