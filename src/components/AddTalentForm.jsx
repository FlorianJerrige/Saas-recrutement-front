import React, { useState } from 'react';
import api from '../services/api';

const AddTalentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    skills: '',
    cv: '',
    linkedin: '',
    headline: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Transformer les compétences en tableau
      const payload = { ...formData, skills: formData.skills.split(',').map(skill => skill.trim()) };
      const response = await api.post('/candidates', payload);
      alert('Candidat ajouté avec succès');
      setFormData({
        name: '',
        phone: '',
        email: '',
        location: '',
        skills: '',
        cv: '',
        linkedin: '',
        headline: '',
      });
    } catch (error) {
      console.error(error);
      alert('Erreur lors de l’ajout du candidat.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Ajouter un talent</h2>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Nom"
          className="p-2 border rounded-lg w-full"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Téléphone"
          className="p-2 border rounded-lg w-full"
          value={formData.phone}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="p-2 border rounded-lg w-full"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Localisation"
          className="p-2 border rounded-lg w-full"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="text"
          name="skills"
          placeholder="Compétences (séparées par des virgules)"
          className="p-2 border rounded-lg w-full"
          value={formData.skills}
          onChange={handleChange}
        />
        <input
          type="text"
          name="cv"
          placeholder="Lien du CV"
          className="p-2 border rounded-lg w-full"
          value={formData.cv}
          onChange={handleChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="Lien LinkedIn"
          className="p-2 border rounded-lg w-full"
          value={formData.linkedin}
          onChange={handleChange}
        />
        <input
          type="text"
          name="headline"
          placeholder="Titre (headline)"
          className="p-2 border rounded-lg w-full"
          value={formData.headline}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
      >
        Ajouter
      </button>
    </form>
  );
};

export default AddTalentForm;
