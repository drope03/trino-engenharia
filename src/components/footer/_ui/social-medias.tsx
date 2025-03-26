"use client";

import Link from "next/link";
import Image from "next/image";
// import Instagram from "@/assets/icons/icon-insta.svg";

export function SocialMedias() {

  return (
    <div className="flex gap-2">
      <Link
        target="_blank"
        className="size-8 flex items-center justify-center rounded-md bg-light" href={""}      >
        {/* <Image src={Instagram} alt="Instagram Icone" /> */}
      </Link>
    </div>
  );
}
