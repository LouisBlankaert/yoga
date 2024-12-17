"use client";
import Link from 'next/link';
import React from 'react';

const HorairesPage = () => {
  const formules = [
    {
      categorie: "Cours Réguliers",
      offres: [
        {
          titre: "Cours Drop-in",
          prix: "15 €",
          description: "Séance unique sans engagement",
        },
        {
          titre: "Abonnement 10 séances",
          prix: "130 €",
          description: "Carte de 10 cours (13€ par séance)",
        },
      ]
    },
    {
      categorie: "Formations et Stages",
      offres: [
        {
          titre: "Formation Yoga 10 jours",
          prix: "950 €",
          description: "Formation complète répartie sur 12 mois",
        },
        {
          titre: "Weekend Méditation & Yoga",
          prix: "160 €",
          description: "Journée entrecoupée de méditation, relaxation & slow yoga",
        },
        {
          titre: "Stage Yoga Hurtebise",
          prix: "299 €",
          description: "Stage intensif sur 2 jours",
        },
      ]
    },
    {
      categorie: "Retraites et Séjours",
      offres: [
        {
          titre: "Retraite Espagne Malaga",
          prix: "625 €",
          description: "All inclusive sauf billet d'avion et transfert",
        },
      ]
    },
    {
      categorie: "Coaching et Développement Personnel",
      offres: [
        {
          titre: "Coach de vie",
          prix: "150 €",
          description: "Pack de 3 séances (55€ par séance individuelle)",
        },
        {
          titre: "Méditation Mindfulness",
          prix: "45 € / mois",
          description: "Sessions via Zoom (15€ la séance unique)",
        },
        {
          titre: "Développement personnel",
          prix: "160 €",
          description: "Weekend complet",
        },
      ]
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-6 lg:px-8 mt-36">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Horaires et Tarifs</h1>
          <p className="text-xl text-gray-600 mb-8">Découvrez nos différentes formules adaptées à vos besoins</p>
          <div className="bg-[#8bb5e1] text-white rounded-lg p-4 inline-block">
            <p className="font-semibold">Pour toute information ou réservation :</p>
            <a href="tel:+32475427861" className="hover:underline">+32 475/42.78.61</a>
          </div>
        </div>

        {formules.map((categorie, index) => (
          <div key={index} className="mb-12">
            <h2 className="text-2xl font-bold text-[#8bb5e1] mb-6">{categorie.categorie}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categorie.offres.map((offre, offreIndex) => (
                <div 
                  key={offreIndex}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{offre.titre}</h3>
                  <div className="text-3xl font-bold text-[#8bb5e1] mb-3">{offre.prix}</div>
                  <p className="text-gray-600">{offre.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-12 bg-white rounded-lg shadow-lg p-8 flex flex-col">
          <h2 className="text-2xl font-bold text-[#8bb5e1] mb-6">Informations Pratiques</h2>
          <div className="text-gray-700">
            <p className="mb-4">
              <strong>Adresse :</strong><br />
              Chaussée de Haecht 843<br />
              1140 EVERE
            </p>
            <p className="mb-4">
              <strong>Contact :</strong><br />
              Email : <a href="mailto:alain.huwe@gmail.com" className="text-[#8bb5e1] hover:underline">alain.huwe@gmail.com</a><br />
              Téléphone : <a href="tel:+32475427861" className="text-[#8bb5e1] hover:underline">+32 475/42.78.61</a>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-12">
          <Link href="/contact">
            <button className="bg-[#8bb5e1] text-white rounded-lg p-4 hover:bg-[#6a9cc2] transition-colors duration-300">
              Contactez-nous
              </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorairesPage;
