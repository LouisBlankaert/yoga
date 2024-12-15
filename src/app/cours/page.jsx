'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';

export default function Cours() {
  useEffect(() => {
    // Initial state for all elements (bottom entrance)
    gsap.set([
      '.cours-description', 
      '.contact-info',
      '.calendar-content'
    ], {
      y: 50,
      opacity: 0
    });

    gsap.set([
      '.cours-title', 
      '.calendar-title'
    ], {
      y: -50,
      opacity: 0
    });

    const tl = gsap.timeline();
    
    // Animate titles from top, other elements from bottom
    tl.to('.cours-title', {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: 'power2.out'
    })
    .to('.cours-description', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3')
    .to('.contact-button', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'back.out(1.7)'
    }, '-=0.2')
    .to('.contact-info', {
      y: 0,
      opacity: 1,
      duration: 0.4,
      ease: 'power2.out'
    }, '-=0.2')
    .to('.calendar-title', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.2')
    .to('.calendar-content', {
      y: 0,
      opacity: 1,
      duration: 0.5,
      ease: 'power2.out'
    }, '-=0.3');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div className="container mx-auto px-4 mt-44">
      {/* Section titre et description */}
      <div className="max-w-4xl mx-auto mb-16">
        <h1 
          className="cours-title text-4xl font-bold text-center mb-8"
          style={{ transform: 'translateY(-50px)', opacity: 0 }}
        >
          Cours de Yoga et de Pilates à Bruxelles Evere Schaerbeek
        </h1>
        <p className="cours-description text-lg text-gray-700 text-center leading-relaxed">
          Des cours de Yoga et Pilates sans discrimination pour tous et tous niveaux – 
          des séances complètes composées de Méditation, des postures, et une petite 
          relaxation en fin de cours. Des professeurs ouverts et expérimentés vous 
          accueillent et répondent à vos questions !
        </p>
        <div className="flex justify-center items-center mt-4">
          <button 
            className="contact-button px-6 py-2 bg-[#8bb5e1] text-white font-semibold rounded-lg shadow-md hover:bg-blue-200 transition"
            style={{ transform: 'translateY(100px)', opacity: 0 }}
          >
            Contactez-nous
          </button>
        </div>
        <div className="flex justify-center items-center mt-4">
          <p className="contact-info">
            Vous pouvez aussi nous rejoindre au : <span className="font-bold">+32 475 42 78 61</span> avec votre nom et prénom
          </p>
        </div>
      </div>

      {/* Section calendrier */}
      <div className="calendar-section bg-white rounded-lg shadow-lg p-6 mb-12">
        <h2 
          className="calendar-title text-2xl font-bold text-center mb-8"
          style={{ transform: 'translateY(-50px)', opacity: 0 }}
        >
          Plannings
        </h2>
        <div className="calendar-content min-h-[500px] flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-500 text-lg">
            Calendrier Google à venir...
          </p>
        </div>
      </div>
    </div>
  );
}
