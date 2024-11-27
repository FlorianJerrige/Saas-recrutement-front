import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    subject: '',
    message: '',
    termsAccepted: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.termsAccepted) {
      alert('Vous devez accepter les conditions d’utilisation.');
      return;
    }
    // Simuler un envoi ou ajouter une fonction pour envoyer à un serveur
    console.log('Form data submitted:', formData);
    setFormSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      subject: '',
      message: '',
      termsAccepted: false,
    });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Contactez-nous</h2>

      {formSubmitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded-lg mb-6">
          Merci pour votre message. Nous vous répondrons dans les plus brefs délais.
        </div>
      )}

      <form className="bg-white shadow-md rounded-lg p-6" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Prénom */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="firstName">
              Prénom
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg w-full"
              required
            />
          </div>

          {/* Nom */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="lastName">
              Nom
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg w-full"
              required
            />
          </div>

          {/* Téléphone */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="phone">
              Téléphone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg w-full"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 border rounded-lg w-full"
              required
            />
          </div>
        </div>

        {/* Objet */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="subject">
            Objet du message
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
            required
          />
        </div>

        {/* Message */}
        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-lg w-full"
            rows="5"
            required
          ></textarea>
        </div>

        {/* Conditions */}
        <div className="mt-4 flex items-start">
          <input
            type="checkbox"
            id="termsAccepted"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="termsAccepted" className="ml-2 text-sm text-gray-600">
            En cochant la case, vous confirmez avoir lu et accepté les{' '}
            <a href="/terms" className="text-blue-500 underline">
              conditions d'utilisation de vos données listées ici
            </a>
            .
          </label>
        </div>

        {/* Bouton d'envoi */}
        <button
          type="submit"
          className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Envoyer
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
