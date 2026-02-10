"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {

  return (
    <nav className="w-full p-6 sm:p-20 flex flex-row gap-20 justify-between">
        <Link href="/">
          <Image
            src="/logos/logosquare.svg"
            alt="Valhallabots Logo"
            width={40}
            height={40}
          />
        </Link>
      <div className="flex flex-row items-center text-xl">
          <Link href="/sponsor" className="px-2">
            Sponsor
            </Link>
          <Link href="/resources" className="px-2">
              Resources
          </Link>
          <Link href="/blog" className="px-2">
              Blog
          </Link>
      </div>
    </nav>
  );
}
