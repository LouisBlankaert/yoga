'use client'
import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Link from 'next/link'

gsap.registerPlugin(ScrollTrigger)

export default function StageBruxelles() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Stage de Yoga à Bruxelles</h1>
          <div className="w-24 h-1 bg-indigo-500 mx-auto mb-8"></div>
        </div>

        {/* Main Content */}
        <div className="animate-on-scroll max-w-3xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Envie de découvrir Bruxelles tout en pratiquant le Yoga et la méditation ? 
              N'hésitez pas à me contacter pour un programme sur mesure en fonction de votre budget.
            </p>
            
            <div className="bg-indigo-50 p-6 rounded-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                Il suffit de me communiquer le nombre de personnes intéressées et votre budget, 
                et je vous préparerai un programme personnalisé qui répondra à vos attentes.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="animate-on-scroll max-w-2xl mx-auto text-center">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-6">Contactez-moi pour plus d'informations</h2>
            <div className="space-y-4">
              <div className="inline-block bg-indigo-50 px-6 py-3 rounded-full">
                <p className="text-gray-700">
                  <span className="font-semibold">Email :</span> saddhaka@gmail.com
                </p>
              </div>
              <div className="block"></div>
              <div className="inline-block bg-indigo-50 px-6 py-3 rounded-full">
                <p className="text-gray-700">
                  <span className="font-semibold">Téléphone :</span> 0475/42.78.61
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg">
              <p className="text-lg text-indigo-600 italic">
                Découvrez Bruxelles autrement à travers une expérience unique de yoga et de méditation.
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
