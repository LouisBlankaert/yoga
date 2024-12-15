'use client';

import React, { useState, useEffect } from 'react';
import gsap from 'gsap';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  useEffect(() => {
    // Reset les positions initiales
    gsap.set(['.contact-title', '.contact-input', '.submit-btn'], {
      y: 50,
      opacity: 0
    });

    const tl = gsap.timeline();
    
    tl.to('.contact-title', {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'power3.out'
    })
    .to('.contact-input', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      stagger: 0.2,
      ease: 'power3.out'
    }, '-=0.4')
    .to('.submit-btn', {
      y: 0,
      opacity: 1,
      duration: 0.6,
      ease: 'power3.out'
    }, '-=0.2');

    // Cleanup function
    return () => {
      tl.kill();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage('Votre message a été envoyé avec succès !');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (error) {
      setResponseMessage('Une erreur est survenue. Veuillez réessayer.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto min-h-screen mt-52 px-8">
      <div className="text-center mb-12">
        <h1 className="contact-title text-5xl font-bold">Contactez-nous</h1>
      </div>
      <form onSubmit={handleSubmit} className="contact-form max-w-2xl mx-auto space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="contact-input w-full p-4 text-lg bg-white border-b border-gray-300 focus:outline-none transition-colors"
          placeholder="Votre nom..."
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="contact-input w-full p-4 text-lg bg-white border-b border-gray-300 focus:outline-none transition-colors"
          placeholder="Votre adresse email..."
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="contact-input large w-full p-4 text-lg bg-white border-b border-gray-300 focus:outline-none transition-colors min-h-[150px] resize-none align-top"
          placeholder="Votre message..."
          required
          style={{ verticalAlign: 'top' }}
        />
        <div className="submit-btn-wrap text-center">
          <button
            type="submit"
            disabled={isSubmitting}
            className="submit-btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
          </button>
        </div>
      </form>
      {responseMessage && (
        <p className="mt-6 text-center text-lg">
          {responseMessage}
        </p>
      )}
    </div>
  );
};

export default Contact;
