'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isHomePage = pathname === '/';

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/tarifs", label: "Tarifs" },
    { href: "/cours", label: "Cours & dates" },
    { href: "/formations", label: "Formations & stages" },
    { href: "/galeries", label: "Galeries" },
    { href: "/divers", label: "Divers" },
    { href: "/alain", label: "Alain Huwé" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-x-hidden">
      <nav
        className={`w-full flex items-center justify-between px-4 sm:px-6 py-4 text-white transition-all duration-500 ease-in-out ${
          (scrolled || !isHomePage) ? 'bg-[#a8ccee] shadow-md' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <div className="flex items-center justify-center">
          <Link href="/">
            <img src="/logo2.png" alt="Logo" className="ml-4 mt-2 md:h-20 h-14 cursor-pointer" />
          </Link>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden xl:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`relative group transition-colors hover:text-gray-200 ${
                pathname === item.href ? 'text-white' : 'text-white'
              }`}
            >
              {item.label}
              <span className={`absolute left-0 bottom-0 h-[2px] w-full bg-white origin-left transition-transform duration-300 ease-in-out
                ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
              />
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden xl:block">
          <Link href="/contact">
            <button className="text-white font-bold px-4 py-2 rounded-lg shadow-md border border-white hover:bg-blue-200 hover:text-white focus:outline-none">
              Reserver
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block xl:hidden p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className="w-full h-0.5 bg-white" />
            <span className="w-full h-0.5 bg-white" />
            <span className="w-full h-0.5 bg-white" />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="xl:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMenuOpen(false)} />
          <div className="fixed top-[72px] right-0 w-64 max-w-[80%] h-[calc(100vh-72px)] bg-[#a8ccee] overflow-y-auto">
            <div className="px-4 py-6">
              <ul className="space-y-4">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block py-2 text-lg ${
                        pathname === item.href 
                          ? 'text-white font-semibold' 
                          : 'text-white'
                      }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-4">
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    <button className="w-full bg-white text-[#a8ccee] py-3 px-4 rounded-lg shadow-md font-semibold">
                      Reserver
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
