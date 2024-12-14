'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

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
    <div className="container m-24 p-8 ml-[24px]">
      <h1 className="text-3xl font-bold mb-4">Contactez-nous</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Nom</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
            rows="5"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
      {responseMessage && <p className="mt-4 text-sm">{responseMessage}</p>}
    </div>
  );
};

export default Contact;
