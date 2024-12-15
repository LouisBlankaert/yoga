"use client"

import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Horaires() {
  const horaires = [
    { jour: 'Lundi', heures: ['9h00 - 10h30', '18h00 - 19h30'] },
    { jour: 'Mardi', heures: ['10h00 - 11h30', '19h00 - 20h30'] },
    { jour: 'Mercredi', heures: ['9h00 - 10h30', '17h30 - 19h00'] },
    { jour: 'Jeudi', heures: ['10h00 - 11h30', '18h00 - 19h30'] },
    { jour: 'Vendredi', heures: ['9h00 - 10h30', '17h00 - 18h30'] },
    { jour: 'Samedi', heures: ['10h00 - 11h30'] },
  ];

  const tarifs = [
    { type: 'Cours à l\'unité', prix: '20€' },
    { type: 'Carte 5 cours', prix: '90€', validite: '3 mois' },
    { type: 'Carte 10 cours', prix: '170€', validite: '6 mois' },
    { type: 'Abonnement mensuel', prix: '80€/mois', description: 'Accès illimité' },
    { type: 'Cours particulier', prix: '60€', description: '1h de cours' },
  ];

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const ctx = gsap.context(() => {
      // Animation des cartes horaires
      gsap.from('.horaire-card', {
        scrollTrigger: {
          trigger: '.horaire-section',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animation des cartes tarifs
      gsap.from('.tarif-card', {
        scrollTrigger: {
          trigger: '.tarif-section',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: 50,
        duration: 0.5,
        stagger: 0.2,
        ease: 'power3.out'
      });

      // Animation des titres
      gsap.from('h1, h2', {
        scrollTrigger: {
          trigger: 'h1',
          start: 'top center+=100',
          toggleActions: 'play none none reverse'
        },
        opacity: 0,
        y: -30,
        duration: 1,
        ease: 'power2.out'
      });

      // Animation de la section note
      gsap.from('.note-section', {
        scrollTrigger: {
          trigger: '.note-section',
          start: 'top bottom-=100', // Modifié ici
          toggleActions: 'play none none none'
        },
        opacity: 0,
        y: 20,
        duration: 0.5,
        ease: 'power2.out'
      });

      // Animations au survol
      const cards = document.querySelectorAll('.horaire-card, .tarif-card');
      cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: 'power2.out'
          });
        });
      });
    });

    // Nettoyage
    return () => {
      ctx.revert();
      if (ScrollTrigger) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }
    };
  }, []);

  return (
    <>
      <main className="flex min-h-screen mt-24 flex-col items-center p-8 md:p-24">
        <div className="w-full max-w-4xl">
          {/* Section Horaires */}
          <section className="mb-16 horaire-section">
            <h1 className="text-4xl font-bold text-center mb-12">Horaires des cours</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {horaires.map((jour, index) => (
                <div key={`${jour.jour}-${index}`} className="horaire-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-4 text-blue-600">{jour.jour}</h3>
                  <ul className="space-y-2">
                    {jour.heures.map((heure, heureIndex) => (
                      <li key={`${heure}-${heureIndex}`} className="text-gray-700">{heure}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Section Tarifs */}
          <section className="tarif-section">
            <h2 className="text-4xl font-bold text-center mb-12">Tarifs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tarifs.map((tarif, index) => (
                <div key={`${tarif.type}-${index}`} className="tarif-card bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold mb-3 text-blue-600">{tarif.type}</h3>
                  <p className="text-2xl font-bold mb-2">{tarif.prix}</p>
                  {tarif.validite && (
                    <p className="text-sm text-gray-600">Validité : {tarif.validite}</p>
                  )}
                  {tarif.description && (
                    <p className="text-sm text-gray-600 mt-2">{tarif.description}</p>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Note importante */}
          <div className="mt-12 text-center text-gray-600 note-section">
            <p>Les cours sont limités à 12 personnes pour garantir une attention personnalisée.</p>
            <p className="mt-2">Réservation conseillée pour tous les cours.</p>
          </div>
        </div>
      </main>
    </>
  );
}
