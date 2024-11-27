import React, { useEffect, useState } from 'react';
import api from '../services/api';
import AddTalentForm from './AddTalentForm';
import Modal from './Modal'; // Import de la modale

const TalentPool = () => {
  const [candidates, setCandidates] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterSkill, setFilterSkill] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false); // État pour gérer l'ouverture de la modale

  useEffect(() => {
    // Récupérer les candidats via l'API
    api.get('/candidates')
      .then(response => setCandidates(response.data))
      .catch(error => console.error(error));
  }, []);

  // Filtrer les candidats selon le terme de recherche et les compétences
  const filteredCandidates = candidates.filter(candidate =>
    candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterSkill === '' || candidate.skills.some(skill => skill.toLowerCase().includes(filterSkill.toLowerCase())))
  );

  return (
    <div className="p-6">
      {/* Bouton pour ouvrir la modale */}
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4"
      >
        Ajouter un talent
      </button>

      {/* Modale */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AddTalentForm />
      </Modal>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Vivier de Talents</h2>

      {/* Barre de recherche */}
      <div className="flex mb-4">
        <input
          type="text"
          placeholder="Rechercher un candidat..."
          className="p-2 border rounded-lg w-1/2 mr-2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrer par compétence..."
          className="p-2 border rounded-lg w-1/2"
          value={filterSkill}
          onChange={(e) => setFilterSkill(e.target.value)}
        />
      </div>

      {/* Liste des candidats */}
      <table className="w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-3 text-left">Nom</th>
            <th className="p-3 text-left">Tél</th>
            <th className="p-3 text-left">Email</th>
            <th className="p-3 text-left">Ville</th>
            <th className="p-3 text-left">Compétences</th>
            <th className="p-3 text-left">CV</th>
            <th className="p-3 text-left">LinkedIn</th>
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.map(candidate => (
            <tr key={candidate._id} className="hover:bg-gray-100 border-b">
              <td className="p-3">{candidate.name}</td>
              <td className="p-3">{candidate.phone || 'N/A'}</td>
              <td className="p-3">{candidate.email}</td>
              <td className="p-3">{candidate.location}</td>
              <td className="p-3">{candidate.skills.join(', ')}</td>
              <td className="p-3">
                <a
                  href={candidate.cv}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  Voir CV
                </a>
              </td>
              <td className="p-3">
                <a
                  href={candidate.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  LinkedIn
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TalentPool;
