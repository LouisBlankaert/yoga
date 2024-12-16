import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#8bb5e1] text-white font-bold py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          {/* Colonne 1 : À propos */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3">À propos</h3>
            <p className="text-sm max-w-xs">
              Alain Yoga offre des cours adaptés à tous les niveaux pour vous
              aider à atteindre le bien-être et la sérénité.
            </p>
          </div>

          {/* Colonne 2 : Réseaux sociaux */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3">Réseaux sociaux</h3>
            <div className="flex justify-center sm:justify-start gap-6">
              <a
                href="https://www.facebook.com/saddhaka/events"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg"
                  alt="Facebook"
                  className="h-8 rounded-full"
                />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
              >
                <img
                  src="/tiktok-logo.png"
                  alt="TikTok"
                  className="h-14 -mt-3"
                />
              </a>
            </div>
          </div>

          {/* Colonne 3 : Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3">Contact</h3>
            <div className="text-sm space-y-2">
              <p>
                <a href="tel:+33123456789" className="hover:underline">
                  01 23 45 67 89
                </a>
              </p>
              <p>
                <a href="mailto:contact@alainyoga.com" className="hover:underline">
                  contact@alainyoga.com
                </a>
              </p>
            </div>
          </div>

          {/* Colonne 4 : Localisation */}
          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-semibold mb-3">Localisation</h3>
            <p className="text-sm">
              123 Rue de la Paix
              <br />
              75001 Paris, France
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-6 border-t border-white/20">
          <p className="text-sm">
            {new Date().getFullYear()} Alain Yoga. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
