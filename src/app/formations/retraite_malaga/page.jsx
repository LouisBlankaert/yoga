'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function RetraiteMalaga() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Retraite de Yoga à Malaga, Espagne</h1>
          <h2 className="text-2xl text-indigo-600 mb-2">17 au 21 mai 2023</h2>
          <h3 className="text-xl text-gray-600">Thème : Le Yoga et l'Épigénétique</h3>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-8"></div>
        </div>

        {/* Introduction */}
        <div className="animate-on-scroll max-w-3xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Rejoignez-nous pour une retraite de 4 jours dans le cadre enchanteur de la Casa de Ejercicios 
              « Villa San Pedro », à Malaga. Ressourcez-vous, explorez votre nature intérieure et découvrez 
              l'unité entre corps et esprit à travers la pratique du yoga.
            </p>
          </div>
        </div>

        {/* Programme */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Programme</h2>
            <ul className="space-y-4">
              {[
                "Pratiques quotidiennes : Asanas, méditation, respiration, relaxation et yoga nidra.",
                "Philosophie : Exploration des Yoga-Sutras de Patanjali et de l'épigénétique.",
                "Ateliers : Mantras, relaxation guidée et voyages intérieurs.",
                "Conférences : Thème Hygiène de l'esprit par Alain Huwé.",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-indigo-500 mr-2">•</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 p-4 bg-indigo-50 rounded-lg">
              <h3 className="font-semibold mb-2">Horaires :</h3>
              <p className="text-gray-700">Début : Mercredi 17 mai à 14h</p>
              <p className="text-gray-700">Fin : Dimanche 21 mai à 14h</p>
            </div>
          </div>
        </div>

        {/* Tarifs et Hébergement */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Hébergement et Tarif</h2>
            <p className="text-xl font-semibold text-indigo-600 mb-4">625 € par personne</p>
            <div className="space-y-2">
              <p className="text-gray-700"><span className="font-semibold">Inclus :</span> Hébergement en pension complète et cours</p>
              <p className="text-gray-700"><span className="font-semibold">Non inclus :</span> Billets d'avion, transferts, dépenses personnelles et assurances</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">À Prévoir</h2>
            <ul className="space-y-2">
              <li className="text-gray-700">• Tapis de yoga, plaid, coussin de méditation</li>
              <li className="text-gray-700">• Cahier et tenue légère</li>
            </ul>
          </div>
        </div>

        {/* Réservation */}
        <div className="animate-on-scroll max-w-3xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Comment Réserver</h2>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <p className="text-gray-700 mb-4">
                Versez un acompte de 400 € avant le 15 mars 2023 sur le compte ING BE84 6528 3079 3059, 
                communication : "Retraite Malaga 2023"
              </p>
              <p className="text-gray-700">Solde payable à la même date.</p>
            </div>
          </div>
        </div>

        {/* Contact et Retraite Sur Mesure */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Contact</h2>
            <div className="space-y-4">
              <p className="text-gray-700"><span className="font-semibold">Email :</span> saddhaka@gmail.com</p>
              <p className="text-gray-700"><span className="font-semibold">Téléphone :</span> Alain Huwé – 0475/427861</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Créer Votre Retraite Sur Mesure</h2>
            <p className="text-gray-700 mb-4">
              Envie d'organiser une retraite personnalisée avec vos proches ? Réunissez 4 participants, 
              et nous créerons ensemble un séjour adapté à vos besoins.
            </p>
            <p className="text-gray-600 italic">
              Options possibles : yoga & randonnée, plongée, ou découverte des trésors de l'Andalousie
            </p>
          </div>
        </div>

        {/* Footer Quote */}
        <div className="animate-on-scroll text-center max-w-2xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <p className="text-lg text-indigo-600 italic">
                Rendez-vous à Malaga pour une expérience unique et inspirante.
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
