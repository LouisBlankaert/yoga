'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function Divers() {
  const containerRef = useRef(null)

  useEffect(() => {
    // Animation pour le titre principal
    gsap.fromTo('.main-title',
      { y: 100, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1,
        ease: "power3.out"
      }
    )

    // Animation pour toutes les cartes
    const cards = gsap.utils.toArray('.animate-card')
    cards.forEach((card) => {
      if (!card.classList.contains('massage-section')) {
        gsap.fromTo(card,
          {
            y: 100,
            opacity: 0
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 95%%",
              toggleActions: "play none none reverse"
            }
          }
        )
      }
    })

    // Animation pour la section massage
    gsap.fromTo('.massage-section',
      {
        scale: 0.8,
        opacity: 0
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: '.massage-section',
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    )
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-20">
        {/* Titre principal */}
        <div className="text-center mb-16 mt-28 main-title">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cours de Yoga à Bruxelles</h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-8"></div>
        </div>

        {/* Introduction */}
        <div className="max-w-3xl mx-auto mb-16 animate-card">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Depuis plus de 4 ans, notre centre accueille des élèves venant de Bruxelles et des communes 
              environnantes telles qu'Evere, Schaerbeek et Woluwe. Nous proposons également des cours de 
              yoga en entreprise, favorisant le bien-être et la détente des employés.
            </p>
          </div>
        </div>

        {/* Sections par commune */}
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Schaerbeek */}
          <div className="animate-card">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Cours de Yoga à Schaerbeek</h2>
              <p className="text-gray-700 mb-4">
                Situé à proximité de la commune de Schaerbeek, notre centre se trouve près de la rue du Tilleul, 
                à la frontière entre Evere et Schaerbeek. Vous êtes à deux pas pour profiter de nos cours de yoga.
              </p>
              <div className="bg-indigo-50 p-4 rounded-lg">
                <p className="text-gray-700">
                  <strong>Contact :</strong> alain.huwe@gmail.com ou 0475/42.78.61
                </p>
              </div>
            </div>
          </div>

          {/* Woluwe */}
          <div className="animate-card">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Cours de Yoga à Woluwe</h2>
              <p className="text-gray-700">
                Notre centre est également accessible depuis Woluwe, à seulement 15 minutes en voiture. 
                Venez découvrir nos séances adaptées à tous les niveaux. Rejoignez-nous pour des cours 
                de yoga près de chez vous !
              </p>
            </div>
          </div>

          {/* Accessibilité */}
          <div className="animate-card">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4">Cours de Yoga accessibles à tous</h2>
              <p className="text-gray-700">
                Au centre, nous croyons fermement que le yoga doit rester accessible à tous. Contrairement 
                à certains centres où les tarifs sont prohibitifs, nous proposons des cours de qualité à 
                des prix abordables. Notre mission : offrir des séances authentiques, ouvertes à toutes 
                les bourses, sans compromis sur l'expérience ou l'enseignement.
              </p>
            </div>
          </div>
        </div>

        {/* Section Massage */}
        <div className="max-w-3xl mx-auto my-16 massage-section animate-card">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Massages du dos</h2>
            <p className="text-gray-700 mb-4">
              En complément des cours de yoga, nous proposons des massages du dos sur rendez-vous pour 
              vous aider à relâcher les tensions et retrouver votre bien-être.
            </p>
            <p className="text-indigo-600 font-semibold">
              👉 Contactez Alain au 0475/42.78.61 pour réserver votre séance.
            </p>
          </div>
        </div>

        {/* Citation finale */}
        <div className="max-w-3xl mx-auto text-center animate-card">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-indigo-600 italic">
              Découvrez une pratique bienveillante et inclusive, pensée pour vous et proche de chez vous.
            </p>
          </div>
        </div>

        {/* Bouton Contact */}
        <div className="text-center mt-12 animate-card">
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
