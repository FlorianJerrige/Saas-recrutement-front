import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api'; // Remplacez par votre configuration API

const CandidateDetails = () => {
  const { id } = useParams(); // Récupère l'ID du candidat depuis l'URL
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    // Récupérer les informations du candidat via l'API
    api.get(`/candidates/${id}`)
      .then((response) => setCandidate(response.data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!candidate) {
    return <p>Chargement des informations du candidat...</p>;
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Détails du candidat</h2>
      <p><strong>Nom :</strong> {candidate.name}</p>
      <p><strong>Téléphone :</strong> {candidate.phone || 'N/A'}</p>
      <p><strong>Email :</strong> {candidate.email}</p>
      <p><strong>Ville :</strong> {candidate.location}</p>
      <p><strong>Compétences :</strong> {candidate.skills.join(', ')}</p>
      {candidate.cv && (
        <p>
          <strong>CV :</strong>{' '}
          <a
            href={candidate.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Voir le CV
          </a>
        </p>
      )}
      {candidate.linkedin && (
        <p>
          <strong>LinkedIn :</strong>{' '}
          <a
            href={candidate.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Voir le profil LinkedIn
          </a>
        </p>
      )}
    </div>
  );
};

export default CandidateDetails;
