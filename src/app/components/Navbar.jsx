'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname(); // Récupérer le chemin actuel
  const [isMenuOpen, setIsMenuOpen] = useState(false); // État du menu burger
  const [scrollY, setScrollY] = useState(0); // Position du scroll
  const [prevScrollY, setPrevScrollY] = useState(0); // Position précédente du scroll
  const [isHidden, setIsHidden] = useState(false); // État pour savoir si la navbar est cachée

  const isHomePage = pathname === '/'; // Vérifier si on est sur la page d'accueil

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/horaires", label: "Horaires & tarifs" },
    { href: "/cours", label: "Cours & dates" },
    { href: "/formations", label: "Formations & stages" },
    { href: "/galeries", label: "Galeries" },
    { href: "/divers", label: "Divers" },
    { href: "/alain", label: "Alain Huwé" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    // Initialiser `scrollY` et `prevScrollY` avec la position actuelle du scroll
    setScrollY(window.scrollY);
    setPrevScrollY(window.scrollY);

    const handleScroll = () => {
      setScrollY(window.scrollY);

      // Logique pour cacher/afficher la navbar en fonction de la direction du scroll
      if (window.scrollY > prevScrollY) {
        setIsHidden(true); // Cache la navbar quand on défile vers le bas
      } else {
        setIsHidden(false); // Affiche la navbar quand on défile vers le haut
      }

      setPrevScrollY(window.scrollY); // Met à jour la position précédente du scroll
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <nav
      className={`flex items-center justify-between px-6 py-4 text-white fixed top-0 w-full z-10 transition-all duration-300 ease-in-out ${
        isHomePage && scrollY <= 50 ? 'bg-transparent' : 'bg-[#a8ccee]' // Transparente sur la page d'accueil sinon bleue
      } ${isHidden ? 'transform -translate-y-full' : ''}`} // Ajoute une classe pour cacher la navbar
    >
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Link href="/">
          <img src="/logo.png" alt="Logo" className="h-16 cursor-pointer" />
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex space-x-6">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`relative group transition-colors ${
              pathname === item.href ? 'text-white' : 'text-white'
            }`}
          >
            {item.label}
            {/* Ligne animée */}
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full bg-white origin-left transition-transform duration-300 ease-in-out
              ${pathname === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
            />
          </Link>
        ))}
      </div>

      {/* Desktop Button */}
      <div className="hidden lg:block">
        <Link href="/contact">
        <button className="text-white font-bold px-4 py-2 rounded-lg shadow-md border border-white hover:bg-blue-200 focus:outline-none transition-all duration-300 ease-in-out">
          Reserver
        </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="lg:hidden flex items-center justify-center bg-[#8bb5e1] py-2 px-4 rounded transition-transform duration-300 ease-in-out"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Menu"
      >
        <span className="text-white text-xl">{isMenuOpen ? '✕' : '☰'}</span>
      </button>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-24 left-0 w-full bg-[#8bb5e1] text-white p-6 z-50 lg:hidden">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`block transition-colors ${
                    pathname === item.href ? 'text-white' : 'text-white hover:text-gray-400'
                  }`}
                  onClick={() => setIsMenuOpen(false)} // Fermer le menu au clic
                >
                  {item.label}
                </Link>
              </li>
            ))}
            {/* Bouton Réserver dans le menu burger */}
            <li>
              <button className="w-full bg-white text-[#8bb5e1] hover:bg-gray-200 py-2 rounded-lg shadow-md">
                Reserver
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
