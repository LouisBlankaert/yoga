'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

export default function AlainPage() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const sectionsRef = useRef([]);
  const buttonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const sections = sectionsRef.current;
    
    // Title animation
    gsap.fromTo(titleRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
      }
    );

    // Sections animation
    sections.forEach((section, index) => {
      gsap.fromTo(section,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      );
    });

    // Button animation
    gsap.fromTo(buttonRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: buttonRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );

    // Button hover effect
    buttonRef.current.addEventListener('mouseenter', () => {
      gsap.to(buttonRef.current, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    buttonRef.current.addEventListener('mouseleave', () => {
      gsap.to(buttonRef.current, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <main ref={containerRef} className="min-h-screen bg-white py-24 px-4 sm:px-6 lg:px-8 mt-32">
      <div className="max-w-4xl mx-auto">
        <h1 ref={titleRef} className="text-4xl font-bold text-center mb-12 text-indigo-900">
          Alain Huwé – Mon Parcours
        </h1>

        <div ref={el => sectionsRef.current[0] = el} className="mb-12">
          <p className="text-lg mb-6">
            Bonjour,
          </p>
          <p className="text-gray-700 mb-6">
            Je m'appelle Alain Huwé, j'ai 59 ans. En couple depuis 30 ans, je suis également le père d'une fille de 28 ans et grand-père d'une petite fille de 6 ans.
          </p>
          <p className="text-gray-700">
            Pendant 35 ans, j'ai été chef d'entreprise, mais c'est en 2007, suite à des problèmes de santé, puis à la crise financière de 2008, que ma vie a pris un nouveau tournant. C'est à cette période que j'ai découvert le yoga – ou peut-être est-ce le yoga qui m'a trouvé.
          </p>
        </div>

        <div ref={el => sectionsRef.current[1] = el} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Ma Rencontre avec le Yoga</h2>
          <p className="text-gray-700 mb-6">
            Dès mes premiers pas sur le tapis, je me suis passionné pour cette discipline. J'ai exploré intensément le yoga et le Pilates, pratiquant entre 8 et 10 heures par semaine, sans jamais m'arrêter depuis.
          </p>
          <p className="text-gray-700">
            Très vite, mon intérêt pour cette pratique m'a conduit à approfondir mes connaissances en participant à divers ateliers et formations :
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>2010 : une première formation de 100 heures avec un professeur de Hatha Yoga.</li>
            <li>Cycle Raja Yoga : trois ans d'apprentissage avec Marc Beuvain, centré sur l'enseignement du Yoga de Patanjali.</li>
            <li>Ateliers résidentiels : des week-ends intensifs de 12 heures avec Thierry Van Brabant.</li>
            <li>Formation avancée : en 2015, je m'inscris à un cycle de 4 ans auprès de Thierry, avec 80 heures de pratique par an.</li>
          </ul>
        </div>

        <div ref={el => sectionsRef.current[2] = el} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Mon Enseignement</h2>
          <p className="text-gray-700 mb-6">
            Depuis 7 ans, j'enseigne le yoga et la méditation dans le centre que j'ai créé, ainsi qu'en entreprise.
          </p>
          <p className="text-gray-700">
            Ma vision repose sur une approche respectueuse des limites physiques et mentales des pratiquants, permettant ainsi d'évoluer en douceur vers un meilleur équilibre intérieur. Le yoga, véritable source de pleine conscience, ancre l'individu dans l'instant présent. C'est une pratique millénaire qui inspire des mouvements modernes comme la mindfulness.
          </p>
        </div>

        <div ref={el => sectionsRef.current[3] = el} className="mb-12">
          <h2 className="text-2xl font-semibold text-indigo-800 mb-6">Mes Projets en Tant qu'Auteur</h2>
          <p className="text-gray-700 mb-6">
            J'œuvre actuellement à partager mon expérience et ma vision à travers plusieurs projets d'écriture :
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Petit traité de bien-être en milieu professionnel.</li>
            <li>La pleine conscience par le yoga.</li>
            <li>Se relaxer.</li>
            <li>Cycle de méditation en 30 jours.</li>
          </ul>
        </div>

        <div ref={el => sectionsRef.current[4] = el} className="mb-12">
          <p className="text-gray-700 mb-6">
            Le yoga n'est pas seulement une pratique physique, mais un art de vivre. À travers mes enseignements et mes écrits, je m'efforce de transmettre cet art pour aider chacun à trouver son équilibre et sa sérénité.
          </p>
          <p className="text-gray-700 italic">
            Vous souhaitez en savoir plus ou participer à l'un de mes cours ? Je suis à votre disposition pour répondre à vos questions.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link 
            ref={buttonRef}
            href="/contact" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </main>
  );
}
