'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function FormationBruxelles() {
  const containerRef = useRef(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.animate-on-scroll')
    
    sections.forEach((section) => {
      gsap.fromTo(section,
        {
          y: 50,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: "top 95%",
            toggleActions: "play none none reverse"
          }
        }
      )
    })
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <div className="animate-on-scroll text-center mb-16 mt-28">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Formation Professeur de Yoga à Bruxelles</h1>
          <h2 className="text-2xl text-gray-600">Avec Alain Huwé</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-8"></div>
        </div>

        {/* Introduction */}
        <div className="animate-on-scroll max-w-3xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-4">Rejoignez une expérience transformative !</h3>
            <p className="text-gray-700 leading-relaxed">
              Cette formation unique vous guide vers l'autonomie dans la pratique des Asanas, de la méditation, 
              et du Pranayama. Découvrez la philosophie du yoga, ses textes sacrés, et apprenez à transmettre 
              cette sagesse avec bienveillance. Que vous souhaitiez enseigner ou approfondir votre pratique 
              personnelle, cette formation est conçue pour vous aider à rayonner au quotidien.
            </p>
          </div>
        </div>

        {/* Pourquoi choisir */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Pourquoi choisir cette formation ?</h3>
            <ul className="space-y-4">
              {[
                "Approfondir votre compréhension du yoga (pratique et philosophie).",
                "Explorer des notions essentielles comme la respiration, la méditation et les mantras.",
                "Développer votre confiance et dépasser vos limites personnelles.",
                "Apprendre à guider des séances adaptées aux besoins individuels et collectifs.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Programme */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Programme</h3>
            <ul className="space-y-4">
              {[
                "Pratiques et techniques : Asanas, Pranayama, Mantras, Méditation et Relaxation.",
                "Philosophie : Histoire du yoga, Sutras de Patanjali, Bhagavad Gita, Samkhya.",
                "Anatomie et physiologie : Comprendre le corps en lien avec la pratique.",
                "Didactique : Construire et animer des cours, correction par la voix et le toucher.",
                "Marketing et lancement : Développer une carrière dans l'enseignement du yoga.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pour qui et Infos pratiques */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Pour qui ?</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-gray-700">Toute personne ouverte au changement et à une pratique régulière.</span>
              </li>
              <li className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <span className="text-gray-700">Les passionnés souhaitant enseigner ou approfondir leur pratique personnelle.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Infos pratiques</h3>
            <div className="space-y-4">
              <p className="text-gray-700"><strong>Durée :</strong> 10 journées réparties sur 1 an</p>
              <p className="text-gray-700"><strong>Coût :</strong> 950€ (possibilité de paiement échelonné)</p>
              <p className="text-gray-700"><strong>Lieu :</strong> Centre Le Saddhaka, Chaussée de Haecht 843, 1140 Evere</p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="animate-on-scroll max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Contact</h3>
            <div className="space-y-4">
              <p className="text-gray-700"><strong>Email :</strong> saddhaka@gmail.com</p>
              <p className="text-gray-700"><strong>Téléphone :</strong> Alain Huwé – 0475/42.78.61</p>
            </div>
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <p className="text-lg text-indigo-600 italic">
                Embarquez pour un voyage intérieur et révélez votre potentiel à travers le yoga.
              </p>
            </div>
          </div>
        </div>

        {/* Bouton Contact */}
        <div className="animate-on-scroll text-center mt-12">
          <Link 
            href="/contact" 
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Contactez-nous
          </Link>
        </div>
      </div>
    </div>
  )
}
