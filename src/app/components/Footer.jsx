import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Alain Yoga. Tous droits réservés.
        </p>
        <div className="flex justify-center mt-4 space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.vectorlogo.zone/logos/facebook/facebook-official.svg" // Remplacez avec le chemin de votre icône
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
