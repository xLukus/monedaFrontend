"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useState } from "react";
import { locales, type Locale } from "@/lib/i18n";
import { Menu, X } from "lucide-react";

export default function Navbar({ messages }: { messages: any }) {
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as Locale;

  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 z-50 flex justify-center py-4">
      <div className="w-[97%] sm:w-[77%]  bg-black/40 backdrop-blur rounded-3xl flex items-center justify-between px-6 h-[72px] text-white">
        {/* LOGO */}
        <Link href={`/${locale}`} className="flex items-center">
          <Image
            src="/Images/logos/c59d236a-6cf4-4ae8-a772-27bd0d9b14b3.png"
            alt="Logo Moneda"
            width={150}
            height={60}
            priority
          />
        </Link>

        {/* DESKTOP NAV */}
        <ul className="hidden lg:flex items-center gap-10 text-lg">
          <li>
            <Link href={`/${locale}/about`}>{messages.Navbar.text1}</Link>
          </li>
          <li>
            <Link href={`/${locale}/services`}>{messages.Navbar.text2}</Link>
          </li>
          <li>
            <Link href={`/${locale}/exchange`}>{messages.Navbar.text3}</Link>
          </li>
          <li>
            <Link href={`/${locale}/contact`}>{messages.Navbar.text4}</Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-4">
          {/* LOCALE SWITCH */}
          <div className="hidden lg:flex gap-2 text-sm">
            {locales.map((loc) => {
              const newPath = pathname.replace(`/${locale}`, `/${loc}`);
              return (
                <Link
                  key={loc}
                  href={newPath}
                  className={loc === locale ? "opacity-50" : "hover:opacity-70"}
                >
                  {loc.toUpperCase()}
                </Link>
              );
            })}
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden p-2"
            aria-label="Open menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </div>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center text-white">
          {/* CLOSE */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-6 left-6"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* LINKS */}
          <div className="flex flex-col items-center gap-10 text-3xl">
            <Link onClick={() => setOpen(false)} href={`/${locale}/about`}>
              {messages.Navbar.text1}
            </Link>
            <Link onClick={() => setOpen(false)} href={`/${locale}/services`}>
              {messages.Navbar.text2}
            </Link>
            <Link onClick={() => setOpen(false)} href={`/${locale}/exchange`}>
              {messages.Navbar.text3}
            </Link>
            <Link onClick={() => setOpen(false)} href={`/${locale}/contact`}>
              {messages.Navbar.text4}
            </Link>
          </div>

          {/* LOCALE SWITCH MOBILE */}
          <div className="absolute bottom-10 flex gap-4 text-lg">
            {locales.map((loc) => {
              const newPath = pathname.replace(`/${locale}`, `/${loc}`);
              return (
                <Link
                  key={loc}
                  href={newPath}
                  onClick={() => setOpen(false)}
                  className={loc === locale ? "opacity-50" : "hover:opacity-70"}
                >
                  {loc.toUpperCase()}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
