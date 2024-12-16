"use client";

import Acceuil from "./components/Acceuil";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function Home() {
  return (
    <main className="relative min-h-screen flex flex-col">
      {/* Section vidéo fixe */}
      <div className="fixed top-0 left-0 w-full h-screen z-0">
        <video
          className="object-cover w-full h-full"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="videos_yoga.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>

        {/* Overlay noir */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      </div>

      {/* Navbar fixe */}
      <div className="fixed top-0 w-full z-50">
        <Navbar />
      </div>
      
      {/* Titre Namaste */}
      <div className="relative h-screen flex items-center justify-center z-10">
        <h1 className="text-5xl font-bold text-white">Namaste</h1>
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 flex-grow">
        <Acceuil />
      </div>
    </main>
  );
}

export default Home;
