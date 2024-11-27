import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        {/* Section principale */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-lg font-bold mb-4">À propos</h3>
            <p className="text-sm text-gray-400">
              Bienvenue dans notre application SaaS, une plateforme dédiée pour vous offrir des solutions intuitives et pratiques.
            </p>
          </div>

          {/* Liens utiles */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-400 hover:text-white">
                  À propos de nous
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-400 hover:text-white">
                  Contactez-nous
                </a>
              </li>
              <li>
                <a href="/faq" className="text-sm text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/mentions-legales" className="text-sm text-gray-400 hover:text-white">
                  Mentions Légales
                </a>
              </li>
            </ul>
          </div>

          {/* Réseaux sociaux */}
          <div>
            <h3 className="text-lg font-bold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-facebook-f"></i> {/* Icône Font Awesome */}
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Section copyright */}
        <div className="text-center mt-6 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cognito. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
