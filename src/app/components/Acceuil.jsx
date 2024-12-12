import React from 'react';

export default function Acceuil() {
  return (
    <div>
      {/* Titre principal */}
      <div className="flex justify-center mb-16 bg[#f5f6f7]">
        <h1 className="text-5xl font-bold text-center">
          Lâchez-prise avec Alain
        </h1>
      </div>

      {/* Section colorée */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="p-2 ml-10 border-r-2">
                <h2 className="text-2xl font-semibold mb-4 text-start">
                    Nos Services
                </h2>
                    <ul className="list-disc list-inside space-y-2 text-lg">
                        <li>Cours de Yoga Adultes, cours de Pilates</li>
                        <li>Coaching avec Alain : processus d’accompagnement</li>
                        <li>Méditation</li>
                        <li>Pranayama</li>
                        <li>Relaxation profonde</li>
                        <li>Philosophie</li>
                        <li>Micro-Yoga : pour personnes en difficultés physiques</li>
                        <li>Massage</li>
                    </ul>
            <div className="mt-6">
                <button className="px-6 py-2 bg-[#8bb5e1] text-white font-semibold rounded-lg shadow-md hover:bg-blue-200 transition">
                    Découvrir les cours
                </button>
            </div>
        </div>  
        <div className="p-10 flex items-center justify-center lg:justify-center">
            <img
                src="/alain.png" // Remplacez par le chemin réel de votre image
                alt="Alain en pleine séance de Yoga"
                className="rounded-lg shadow-lg object-cover object-top h-72 w-72 items-start"
            />
        </div>
      </div>
      <div className='grid-cols-1 lg:grid-cols-2 flex flex-col p-3 mt-24 rounded-lg border shadow-lg'>
        <div className='p-3 w-full flex items-center justify-center'>
            <p className='text-lg w-[50%]'>
                <span className='font-bold text-xl'>Lieu : Centre le Saddhaka , chaussée de Haecht 843 à 1140 EVERE</span>
                <br/>Le yoga est pour moi un médicament naturel car il renforce la musculature du corps, lui rend son énergie et l’apaise. C’est aussi un médicament de l’âme. Le yoga est l’union du corps et de l’esprit ; le Saddhaka est celui qui cherche la voie…
            </p>
        </div>
        <div className='flex gap-16 p-3 justify-center'>
            <img src="/salle1.png" alt="" className='rounded-lg shadow-lg object-cover h-72 w-[30%]' />
            <img src="/salle2.png" alt="" className='rounded-lg shadow-lg object-cover h-72 w-[30%]' />
        </div>
      </div>
      <div className='w-screen ml-[-65px] pt-10 mb-[-104px]'>
        <img src="/yoga_images.png" alt="" className='max-h-52 w-full object-cover' />
      </div>
    </div>
  );
}
