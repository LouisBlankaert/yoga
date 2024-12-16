'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function CoursEnfants() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Yoga Parents-Enfants</h1>
          <h2 className="text-2xl text-gray-600">Un moment privilégié à partager</h2>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mt-8"></div>
        </div>

        {/* Introduction */}
        <div className="animate-on-scroll max-w-3xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed">
              Partagez un moment privilégié avec votre enfant grâce à nos cours de yoga, 
              chaque mercredi après-midi de 14h à 15h, sur réservation.
            </p>
          </div>
        </div>

        {/* Pourquoi participer */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Pourquoi participer ?</h3>
            <p className="text-gray-700 mb-6">
              Ce cours unique est conçu pour renforcer le lien parent-enfant à travers une approche ludique du yoga.
            </p>
            <div className="bg-indigo-50 p-6 rounded-lg">
              <h4 className="font-semibold mb-4">Ensemble, découvrez :</h4>
              <ul className="space-y-3">
                {[
                  "Les bienfaits de la méditation",
                  "Les techniques de respiration",
                  "Les postures adaptées",
                  "La relaxation",
                  "L'univers des mantras et mandalas"
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-indigo-500 mr-2">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Informations pratiques */}
        <div className="animate-on-scroll max-w-4xl mx-auto mb-16 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Où et quand ?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Quand :</strong> Tous les mercredis de 14h à 15h
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Lieu :</strong> Jardin du Centre (ou intérieur en cas de mauvais temps)
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold mb-6">Comment réserver ?</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Email :</strong> saddhaka@gmail.com
                </p>
              </div>
              <div className="flex items-start">
                <span className="text-indigo-500 mr-2">•</span>
                <p className="text-gray-700">
                  <strong>Téléphone/SMS :</strong> 0475/42.78.61
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Citation finale */}
        <div className="animate-on-scroll max-w-3xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <p className="text-lg text-indigo-600 italic">
                Offrez à votre enfant et à vous-même un moment de sérénité et de complicité au cœur de la nature.
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