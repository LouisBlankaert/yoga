"use client";

import Acceuil from "./components/Acceuil";
import Navbar from "./components/Navbar";

function Home() {
  return (
    <main className="relative min-h-screen flex flex-col overflow-x-hidden">
      {/* Section fond d'écran */}
      <div className="fixed top-0 left-0 right-0 w-full h-screen z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 min-h-full w-auto h-auto object-cover"
        >
          <source src="/videos_yoga.mp4" type="video/mp4" />
        </video>
        {/* Overlay sombre */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <Navbar />
      
      {/* Titre Namaste */}
      <div className="relative h-screen flex items-center justify-center z-10">
        <h1 className="text-5xl font-bold text-white opacity-70">Namaste</h1>
      </div>

      {/* Contenu principal */}
      <div className="relative z-20 flex-grow">
        <Acceuil />
      </div>

      {/* Section background bas de page */}
      <div className="relative w-full h-32 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-bottom bg-no-repeat"
          style={{
            backgroundImage: "url('/11.png')",
          }}
        />
      </div>
    </main>
  );
}

export default Home;
