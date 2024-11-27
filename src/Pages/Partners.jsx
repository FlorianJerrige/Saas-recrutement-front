import React, { useState } from 'react';
import PartnerList from '../components/PartnerList';
import AddPartnerForm from '../components/AddPartnerForm';

const Partners = () => {
  const [isFormVisible, setIsFormVisible] = useState(false); // État pour afficher ou masquer le formulaire

  const handleOpenForm = () => {
    setIsFormVisible(true); // Afficher le formulaire
  };

  const handleCloseForm = () => {
    setIsFormVisible(false); // Masquer le formulaire
  };

  return (
    <div>
      <div className="d-flex gap-2 mb-2">
        <h1 className="text-lg font-bold mb-2">Mes Partenaires</h1>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={handleOpenForm} // Ouvrir le formulaire
        >
          Ajouter un partenaire
        </button>
      </div>

      {/* Liste des partenaires */}
      <div>
        <PartnerList />
      </div>

      {/* Formulaire conditionnel */}
      {isFormVisible && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <AddPartnerForm />
          <button
            onClick={handleCloseForm}
            className="absolute top-4 right-4 bg-red-500 text-white px-4 py-2 rounded-lg"
          >
            Fermer
          </button>
        </div>
      )}
    </div>
  );
};

export default Partners;
