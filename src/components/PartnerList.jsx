import React, { useEffect, useState } from 'react';
import api from '../services/api';

const PartnerList = () => {
  const [partners, setPartners] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' pour croissant, 'desc' pour décroissant

  useEffect(() => {
    // Chargement des partenaires depuis l'API
    api.get('/partners')
      .then(response => setPartners(response.data))
      .catch(error => console.error(error));
  }, []);

  // Fonction de tri des partenaires
  const sortPartners = (field, order) => {
    const sortedPartners = [...partners].sort((a, b) => {
      if (a[field] < b[field]) return order === 'asc' ? -1 : 1;
      if (a[field] > b[field]) return order === 'asc' ? 1 : -1;
      return 0;
    });
    return sortedPartners;
  };

  // Appliquer la recherche sur les partenaires
  const filteredPartners = partners.filter(partner =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Trier les partenaires après application du filtre
  const sortedAndFilteredPartners = sortPartners(sortField, sortOrder).filter(partner =>
    partner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    partner.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Fonction pour changer le tri
  const handleSort = (field) => {
    const order = sortField === field && sortOrder === 'asc' ? 'desc' : 'asc'; // Inverser l'ordre
    setSortField(field);
    setSortOrder(order);
  };

   // Fonction pour tronquer un texte long
   const truncate = (text, maxLength) => {
    if (text.length > maxLength) {
      return `${text.substring(0, maxLength)}...`;
    }
    return text;
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Liste des Partenaires</h2>

      {/* Champ de recherche */}
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Rechercher un partenaire..."
          className="p-2 border rounded-lg w-1/2"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Afficher un message si aucun partenaire trouvé */}
      {filteredPartners.length === 0 ? (
        <p className="text-gray-600">Aucun partenaire trouvé avec ce critère.</p>
      ) : (
        <table className="w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="p-3 text-left cursor-pointer" onClick={() => handleSort('name')}>
                Nom
                {sortField === 'name' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th className="p-3 text-left cursor-pointer" onClick={() => handleSort('type')}>
                Type
                {sortField === 'type' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th className="p-3 text-left cursor-pointer" onClick={() => handleSort('contact')}>
                Contact
                {sortField === 'contact' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th className="p-3 text-left cursor-pointer" onClick={() => handleSort('address')}>
                Adresse
                {sortField === 'address' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th className="p-3 text-left cursor-pointer" onClick={() => handleSort('responsable')}>
                Responsable
                {sortField === 'responsable' && (sortOrder === 'asc' ? ' ↑' : ' ↓')}
              </th>
              <th className="p-3 text-left">
                Contrat
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedAndFilteredPartners.map(partner => (
              <tr key={partner.id} className="hover:bg-gray-100 border-b">
                <td className="p-3">{partner.name}</td>
                <td className="p-3">{partner.type}</td>
                <td className="p-3">{partner.contact}</td>
                <td className="p-3">{partner.address}</td>
                <td className="p-3">{partner.responsable}</td>
                <td className="p-3">
                  {partner.contract ? (
                       <a
                       href={`http://localhost:5000/${partner.contract}`} // Modifier selon la structure de votre backend
                       target="_blank"
                       rel="noopener noreferrer"
                       className="text-blue-500 underline"
                     >
                       {truncate(partner.contract, 20)}
                     </a>
                   ) : (
                     'Aucun fichier'
                  )}

                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default PartnerList;
