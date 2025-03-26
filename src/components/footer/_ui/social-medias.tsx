"use client";

import Link from "next/link";
import Image from "next/image";
import Linkedin from "@/assets/icons/linkedin.svg";
import Facebook from "@/assets/icons/facebook.svg";
import Instagram from "@/assets/icons/instagram.svg";

const socialLinks = [
  { href: "https://www.instagram.com/trino.engenharia/", icon: Instagram, alt: "Instagram" },
  { href: "https://www.facebook.com/trinoengenhariaterraplenagem/", icon: Facebook, alt: "Facebook" },
  { href: "https://www.linkedin.com/in/trino-terraplenagem-895596172/", icon: Linkedin, alt: "LinkedIn" },
];

export function SocialMedias() {
  return (
    <div className="flex gap-2">
      {socialLinks.map(({ href, icon, alt }, index) => (
        <Link
          key={index}
          href={href}
          target="_blank"
          className="size-8 flex items-center justify-center rounded-md bg-light"
        >
          <Image src={icon} alt={`${alt} Ícone`} width={20} height={20}/>
        </Link>
      ))}
    </div>
  );
}
