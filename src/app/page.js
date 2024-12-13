"use client";

import Acceuil from "./components/Acceuil";
import Navbar from "./components/Navbar";

function Home() {

  return (
    <div>
      {/* Vidéo en arrière-plan */}
      <div className="relative w-full h-screen">
        <video
          className="object-cover w-full h-full bg-black-opacity-25"
          autoPlay
          loop
          muted
        >
          <source src="videos_yoga.mp4" type="video/mp4" />
          Votre navigateur ne prend pas en charge la vidéo.
        </video>

        {/* Overlay noir */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

        {/* Navbar avec un fond transparent quand elle est au-dessus de la vidéo */}
        <div className="absolute top-0 w-full">
          <Navbar />
        </div>
        
        {/* Contenu au-dessus de la vidéo */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 text-white text-center">
          <h1 className="text-5xl font-bold opacity-60">Namaste</h1>
        </div>
      </div>


      {/* Contenu sous la vidéo */}
      <div className="min-h-screen p-16">
        <Acceuil />
      </div>
    </div>
  );
}

export default Home;
