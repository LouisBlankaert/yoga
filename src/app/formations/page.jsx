'use client'
import React, { useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import gsap from 'gsap'

const formationItems = [
  {
    title: "Formation à Bruxelles",
    description: "Découvrez nos formations de yoga à Bruxelles",
    link: "/formations/formation_bruxelles",
    image: "/bruxelles1.png"
  },
  {
    title: "Stages à Bruxelles",
    description: "Participez à nos stages intensifs à Bruxelles",
    link: "/formations/stage_bruxelles",
    image: "/bruxelles2.png"
  },
  {
    title: "Retraite à Malaga",
    description: "Évadez-vous lors de notre retraite yoga à Malaga",
    link: "/formations/retraite_malaga",
    image: "/malaga.png"
  },
  {
    title: "Cours Enfants",
    description: "Cours de yoga adaptés pour les enfants",
    link: "/formations/cours_enfants",
    image: "/enfants.png"
  }
]

export default function Formations() {
  const titleRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(titleRef.current,
      {
        y: -100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out"
      }
    );
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 mt-28 min-h-screen">
        <h1 ref={titleRef} className="text-4xl font-bold text-center mb-12">Nos Formations et Activités</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formationItems.map((item, index) => (
            <Link href={item.link} key={index}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer">
                <div className="h-48 bg-gray-200 relative">
                  <Image 
                    src={item.image} 
                    alt={item.title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
