import React, { useState, useRef } from 'react';
import api from '../services/api';

const AddPartnerForm = () => {
  const [partner, setPartner] = useState({
    name: '',
    type: '',
    contact: '',
    address: '',
    responsable: '',
    contract: ''
  });

  const [contractFile, setContractFile] = useState(null);
  const fileInputRef = useRef(null); // Référence pour le champ fichier

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Récupère le premier fichier sélectionné
    if (file && file.type === "application/pdf") {
      setContractFile(file); // Enregistre le fichier PDF dans l'état
    } else {
      alert("Veuillez sélectionner un fichier PDF valide.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPartner({ ...partner, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Création de l'objet FormData
    const formData = new FormData();
    formData.append('name', partner.name);
    formData.append('type', partner.type);
    formData.append('contact', partner.contact);
    formData.append('address', partner.address);
    formData.append('responsable', partner.responsable);
    if (contractFile) {
      formData.append('contract', contractFile); // Ajoute le fichier PDF
    }

    try {
      const response = await api.post('/partners', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Important pour l'envoi de fichiers
        },
      });
      alert(`Partenaire ${response.data.name} ajouté avec succès !`);
      setPartner({ name: '', type: '', contact: '', address: '', responsable: '' });
      setContractFile(null); // Réinitialise le fichier
      if (fileInputRef.current) {
        fileInputRef.current.value = ''; // Réinitialise le champ fichier
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(`Erreur: ${error.response.data.message}`);
      } else {
        alert("Erreur inconnue lors de l'ajout du partenaire.");
      }
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 rounded-2xl">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h3 className="text-2xl font-semibold text-gray-700 mb-4">Ajouter un Partenaire</h3>

        {/* Nom du partenaire */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Nom du partenaire</label>
          <input
            type="text"
            name="name"
            value={partner.name}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Nom du partenaire"
            required
          />
        </div>

        {/* Type de partenariat */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Type de partenariat</label>
          <input
            type="text"
            name="type"
            value={partner.type}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Type de partenariat"
            required
          />
        </div>

        {/* Contact */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Contact</label>
          <input
            type="email"
            name="contact"
            value={partner.contact}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Contact"
          />
        </div>

        {/* Adresse */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Adresse</label>
          <input
            type="text"
            name="address"
            value={partner.address}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Adresse"
          />
        </div>

        {/* Responsable */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Responsable</label>
          <input
            type="text"
            name="responsable"
            value={partner.responsable}
            onChange={handleChange}
            className="w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Responsable"
          />
        </div>

        {/* Contrat */}
        <div className="flex items-center mb-4">
          <label className="w-1/3 text-gray-700 font-medium">Contrat</label>
          <input
            type="file"
            name="contract"
            accept="application/pdf" // N'accepte que les fichiers PDF
            onChange={handleFileChange}
            ref={fileInputRef} // Associe la référence
            className="w-2/3 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Bouton de soumission */}
        <div className="text-center">
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
            Ajouter Partenaire
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPartnerForm;
