import React, { useEffect, useState } from 'react';
import api from '../services/api';

const TodoList = () => {
  // État pour stocker les tâches et la nouvelle tâche
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  // Charger les tâches existantes au montage du composant
  useEffect(() => {
    api.get('/tasks')
      .then(response => setTasks(response.data))
      .catch(error => console.error(error));
  }, []);

  // Gestion de la soumission du formulaire
  const handleAddTask = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    try {
      // Envoi de la nouvelle tâche au backend
      const response = await api.post('/tasks', { title: newTask });
      
      // Ajout de la nouvelle tâche à l'état des tâches
      setTasks([...tasks, response.data]);

      // Réinitialiser l'entrée de nouvelle tâche
      setNewTask('');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de la tâche :', error);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg  items-center justify-center  ">
      <h2 className="text-2xl font-bold mb-4">To-Do List</h2>

      {/* Formulaire d'ajout de tâche */}
      <form onSubmit={handleAddTask} className="flex mb-4 ">
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400">
          Ajouter
        </button>
      </form>

      {/* Liste des tâches */}
      <ul className="list-disc list-inside">
        {tasks.map(task => (
          <li key={task.id} className="p-2 border-b border-gray-200">
            {task.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
