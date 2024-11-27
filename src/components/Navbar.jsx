// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white-500 text-black p-4 border-b border-gray-300 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-bold">Cognito.</h1>
        <ul className="flex space-x-4 ">
          <li>
            <Link to="/" 
            className="hover:bg-gray-200 px-3 py-1 rounded-md transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/jobs" className="hover:bg-gray-200 px-3 py-1 rounded-md transition-colors">
              Jobs
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:bg-gray-200 px-3 py-1 rounded-md transition-colors">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/login" className="hover:bg-gray-200 px-3 py-1 rounded-md transition-colors">
              Se Connecter
            </Link>
          </li>
          <li>
            <Link to="/test" className="hover:bg-gray-200 px-3 py-1 rounded-md transition-colors">
              Test
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
