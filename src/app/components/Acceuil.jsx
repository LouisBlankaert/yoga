import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function Acceuil() {
  const servicesRef = useRef(null);
  const imageRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    // Set initial states
    gsap.set([servicesRef.current, imageRef.current, infoRef.current], {
      opacity: 0
    });
    
    gsap.set(servicesRef.current, { x: -100 });
    gsap.set(imageRef.current, { x: 100 });
    gsap.set(infoRef.current, { y: 100 });

    // Create timeline for initial animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to(servicesRef.current, {
      x: 0,
      opacity: 1,
      duration: 1,
      delay: 0.2
    })
    .to(imageRef.current, {
      x: 0,
      opacity: 1,
      duration: 1
    }, '-=0.5')
    .to(infoRef.current, {
      y: 0,
      opacity: 1,
      duration: 1
    }, '-=0.5');

    // Create scroll triggers for re-animation on scroll
    ScrollTrigger.create({
      trigger: servicesRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(servicesRef.current, {
          x: 0,
          opacity: 1,
          duration: 1
        });
      },
      onLeave: () => {
        gsap.to(servicesRef.current, {
          x: -100,
          opacity: 0,
          duration: 1
        });
      },
      onEnterBack: () => {
        gsap.to(servicesRef.current, {
          x: 0,
          opacity: 1,
          duration: 1
        });
      },
      onLeaveBack: () => {
        gsap.to(servicesRef.current, {
          x: -100,
          opacity: 0,
          duration: 1
        });
      }
    });

    ScrollTrigger.create({
      trigger: imageRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(imageRef.current, {
          x: 0,
          opacity: 1,
          duration: 1
        });
      },
      onLeave: () => {
        gsap.to(imageRef.current, {
          x: 100,
          opacity: 0,
          duration: 1
        });
      },
      onEnterBack: () => {
        gsap.to(imageRef.current, {
          x: 0,
          opacity: 1,
          duration: 1
        });
      },
      onLeaveBack: () => {
        gsap.to(imageRef.current, {
          x: 100,
          opacity: 0,
          duration: 1
        });
      }
    });

    ScrollTrigger.create({
      trigger: infoRef.current,
      start: 'top 80%',
      onEnter: () => {
        gsap.to(infoRef.current, {
          y: 0,
          opacity: 1,
          duration: 1
        });
      },
      onLeave: () => {
        gsap.to(infoRef.current, {
          y: 100,
          opacity: 0,
          duration: 1
        });
      },
      onEnterBack: () => {
        gsap.to(infoRef.current, {
          y: 0,
          opacity: 1,
          duration: 1
        });
      },
      onLeaveBack: () => {
        gsap.to(infoRef.current, {
          y: 100,
          opacity: 0,
          duration: 1
        });
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="bg-sky-50 min-h-screen py-20 pb-48">
      <div className="container flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Titre principal */}
        <div className="py-8 sm:py-12 lg:py-16 w-full">
          <h1 className="text-3xl sm:text-2xl lg:text-4xl font-bold text-center">
            Lâchez-prise avec Alain
          </h1>
        </div>

        {/* Section image et citation */}
        <div ref={imageRef} className="mb-16 max-w-5xl w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center">
              <img
                src="/alain.png" 
                alt="Alain en pleine séance de Yoga"
                className="rounded-lg shadow-xl object-cover object-top w-full max-w-[300px] h-auto aspect-square"
              />
            </div>
            <div className="flex justify-center">
              <blockquote className="relative p-8">
                <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 text-6xl text-[#8bb5e1] opacity-50">"</div>
                <p className="text-xl sm:text-2xl italic text-gray-700 mb-4 text-center">
                  Enseigner est le début de la révélation des connaissances apprises
                </p>
                <footer className="font-bold text-lg sm:text-xl text-[#8bb5e1] text-center">
                  — Alain Huwé
                </footer>
                <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 text-6xl text-[#8bb5e1] opacity-50">"</div>
              </blockquote>
            </div>
          </div>
        </div>

        {/* Section services */}
        <div ref={servicesRef} className="p-4 sm:p-6 lg:p-8 bg-white rounded-lg shadow-lg max-w-5xl w-full">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-8 text-center text-[#8bb5e1]">
            Nos Services
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base sm:text-lg max-w-4xl mx-auto">
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Cours de Yoga Adultes, cours de Pilates</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Coaching avec Alain : processus d'accompagnement</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Méditation</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Pranayama</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Relaxation profonde</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Philosophie</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Micro-Yoga : pour personnes en difficultés physiques</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="text-[#8bb5e1]">•</span>
              <span>Massage</span>
            </li>
          </ul>
          <div className="mt-8 flex justify-center">
            <Link href="/cours">
              <button className="px-8 py-4 bg-[#8bb5e1] text-white font-semibold rounded-lg shadow-md hover:bg-blue-200 transition duration-300">
                Découvrir les cours
              </button>
            </Link>
          </div>
        </div>

        {/* Section info */}
        <div ref={infoRef} className="mt-16 sm:mt-24 lg:mt-32">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="flex items-center justify-center">
                <div className="max-w-lg w-full">
                  <p className="text-base sm:text-lg">
                    <span className="font-bold text-lg sm:text-xl block mb-4">
                      Lieu : Centre le Saddhaka , chaussée de Haecht 843 à 1140 EVERE
                    </span>
                    Le yoga est pour moi un médicament naturel car il renforce la musculature du corps, 
                    lui rend son énergie et l'apaise. C'est aussi un médicament de l'âme. 
                    Le yoga est l'union du corps et de l'esprit : le Saddhaka est celui qui cherche la voie…
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                <img
                  src="/salle1.png"
                  alt="Salle 1"
                  className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-64"
                />
                <img
                  src="/salle2.png"
                  alt="Salle 2"
                  className="rounded-lg shadow-lg object-cover w-full h-48 sm:h-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
