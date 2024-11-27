import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleKeepClone = () => {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Charger les notes depuis le backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/notes')
      .then(response => setNotes(response.data))
      .catch(error => console.error('Erreur lors du chargement des notes:', error));
  }, []);

  // Ajouter une nouvelle note
  const handleAddNote = () => {
    if (!content) return;

    const newNote = { title, content };

    axios.post('http://localhost:5000/api/notes', newNote)
      .then(response => {
        setNotes([response.data, ...notes]); // Ajouter la nouvelle note à l'état
        setTitle('');
        setContent('');
      })
      .catch(error => console.error('Erreur lors de l’ajout de la note:', error));
  };

  // Supprimer une note
  const handleDeleteNote = (id) => {
    axios.delete(`http://localhost:5000/api/notes/${id}`)
      .then(() => setNotes(notes.filter(note => note._id !== id)))
      .catch(error => console.error('Erreur lors de la suppression de la note:', error));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
        Notes
      </h1>

      {/* Formulaire pour ajouter une note */}
      <div className="bg-white shadow-md rounded-lg p-4 max-w-lg mx-auto mb-6">
        <input
          type="text"
          placeholder="Titre"
          className="w-full p-2 mb-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Écrivez une note..."
          className="w-full p-2 border border-gray-300 rounded"
          rows="3"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-3 rounded hover:bg-blue-600"
          onClick={handleAddNote}
        >
          Ajouter une note
        </button>
      </div>

      {/* Affichage des notes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map(note => (
          <div
            key={note._id}
            className="bg-yellow-100 shadow-md rounded-lg p-4 relative"
          >
            <button
              className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              onClick={() => handleDeleteNote(note._id)}
            >
              ✖
            </button>
            {note.title && (
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {note.title}
              </h2>
            )}
            <p className="text-gray-700">{note.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoogleKeepClone;
