// front - AddJob.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddJob = () => {
  const [partners, setPartners] = useState([]);
  const [partnerName, setPartnerName] = useState('');
  const [jobDetails, setJobDetails] = useState({
    title: '',
    description: '',
    experienceRequired: 0,
    skills: '',
    location: '',
    salaryMin: 0,
    salaryMax: 0,
    contractType: '',
    applicationLink: '',
  });

  // Récupérer la liste des partenaires
  useEffect(() => {
    axios.get('/api/partners/names').then((response) => {
      setPartners(response.data.map((partner) => partner.name));
    });
  }, []);

  // Gérer l’envoi du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    const jobData = {
      ...jobDetails,
      skills: jobDetails.skills.split(',').map((skill) => skill.trim()), // Convertir en tableau
      salary: { min: jobDetails.salaryMin, max: jobDetails.salaryMax },
      partnerName, // Ajouter le nom du partenaire
    };

    axios.post('/api/jobs', jobData)
      .then((response) => {
        console.log('Poste ajouté avec succès :', response.data);
      })
      .catch((error) => {
        console.error('Erreur lors de l’ajout du poste :', error.response.data);
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Ajouter un poste ouvert</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-gray-700 text-sm font-medium">Titre du poste</label>
          <input
            type="text"
            placeholder="Titre du poste"
            value={jobDetails.title}
            onChange={(e) => setJobDetails({ ...jobDetails, title: e.target.value })}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium">Description</label>
          <textarea
            placeholder="Description"
            value={jobDetails.description}
            onChange={(e) => setJobDetails({ ...jobDetails, description: e.target.value })}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium">Années d'expérience requises</label>
            <input
              type="number"
              placeholder="Années d'expérience"
              value={jobDetails.experienceRequired}
              onChange={(e) => setJobDetails({ ...jobDetails, experienceRequired: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">Localisation</label>
            <input
              type="text"
              placeholder="Localisation"
              value={jobDetails.location}
              onChange={(e) => setJobDetails({ ...jobDetails, location: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium">Compétences (séparées par des virgules)</label>
          <input
            type="text"
            placeholder="Compétences"
            value={jobDetails.skills}
            onChange={(e) => setJobDetails({ ...jobDetails, skills: e.target.value })}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-medium">Salaire minimum</label>
            <input
              type="number"
              placeholder="Salaire minimum"
              value={jobDetails.salaryMin}
              onChange={(e) => setJobDetails({ ...jobDetails, salaryMin: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-medium">Salaire maximum</label>
            <input
              type="number"
              placeholder="Salaire maximum"
              value={jobDetails.salaryMax}
              onChange={(e) => setJobDetails({ ...jobDetails, salaryMax: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium">Partenaire</label>
          <select
            value={partnerName}
            onChange={(e) => setPartnerName(e.target.value)}
            className="w-full mt-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          >
            <option value="">Sélectionnez un partenaire</option>
            {partners.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Ajouter le poste
        </button>
      </form>
    </div>
  );
};

export default AddJob;
