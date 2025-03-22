import React, { useState } from 'react';  // Importation React
import { Link, useLocation } from 'react-router-dom';  // Importation de React Router
import { Heart, Calendar, Home, User, Brain, MessageCircle, Menu } from 'lucide-react';  // Icones
import { Outlet } from 'react-router-dom';  // Importation correcte de Outlet

const Navigation = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Pour gérer l'ouverture/fermeture du menu

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { path: '/', icon: Home, label: 'Accueil' },
    { path: '/about', icon: User, label: 'Qui suis-je ?' },
    { path: '/profession', icon: Brain, label: 'Mon métier' },
    { path: '/faq', icon: MessageCircle, label: 'FAQ' },
    {
      path: 'https://www.doctolib.fr',  // URL externe pour Doctolib
      icon: Calendar,
      label: 'Rendez-vous',
      isExternal: true,  // Ajout d'un indicateur pour savoir que ce lien est externe
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Heart className="h-8 w-8 text-primary-400" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Valentine</span>
            </div>
          </div>

          {/* Menu hamburger pour les petits écrans */}
          <div className="sm:hidden flex items-center ml-6">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

          {/* Menu principal pour les écrans plus larges */}
          <div className="hidden sm:flex sm:ml-6 sm:space-x-8">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.isExternal ? (
                  // Si c'est un lien externe (Doctolib)
                  <a
                    href={item.path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      isActive(item.path)
                        ? 'border-b-2 border-primary-400 text-gray-900'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    target="_blank"  // Ouvre dans un nouvel onglet
                    rel="noopener noreferrer"  // Sécurité pour l'ouverture dans un nouvel onglet
                  >
                    <item.icon className="h-4 w-4 mr-1" />
                    {item.label}
                  </a>
                ) : (
                  // Si c'est un lien interne
                  <Link
                    to={item.path}
                    className={`inline-flex items-center px-1 pt-1 text-sm font-medium ${
                      isActive(item.path)
                        ? 'border-b-2 border-primary-400 text-gray-900'
                        : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    <item.icon className="h-4 w-4 mr-1" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Menu déroulant pour petits écrans */}
        <div
          className={`sm:hidden ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}
        >
          <div className="flex flex-col mt-4 space-y-4">
            {navItems.map((item) => (
              <div key={item.path}>
                {item.isExternal ? (
                  // Si c'est un lien externe (Doctolib)
                  <a
                    href={item.path}
                    className={`block px-4 py-2 text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-primary-200 text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    target="_blank"  // Ouvre dans un nouvel onglet
                    rel="noopener noreferrer"  // Sécurité pour l'ouverture dans un nouvel onglet
                    onClick={() => setIsMenuOpen(false)} // Ferme le menu après une sélection
                  >
                    <item.icon className="h-4 w-4 mr-2 inline-block" />
                    {item.label}
                  </a>
                ) : (
                  // Si c'est un lien interne
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-sm font-medium ${
                      isActive(item.path)
                        ? 'bg-primary-200 text-gray-900'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setIsMenuOpen(false)} // Ferme le menu après une sélection
                  >
                    <item.icon className="h-4 w-4 mr-2 inline-block" />
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-primary-100 border-t">
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-sm font-semibold text-primary-900 tracking-wider uppercase">Contact</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <p className="text-base text-gray-500"> Maison de Santé, 56b lotissement Létrat</p>
              <p className="text-base text-gray-500">38230 Tignieu-Jameyzieu </p>
            </li>
            <li>
              <a href="tel:+33123456789" className="text-base text-gray-500 hover:text-gray-900">
                06 59 90 87 61
              </a>
            </li>
            <li>
              <a href="mailto:contact@valentine-psychometrie.fr" className="text-base text-gray-500 hover:text-gray-900">
                valentine.nicolas@psychomotricien.eu
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary-900 tracking-wider uppercase">Ressources</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/faq" className="text-base text-gray-500 hover:text-gray-900">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-base text-gray-500 hover:text-gray-900">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/resources" className="text-base text-gray-500 hover:text-gray-900">
                Guides & Conseils
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-primary-900 tracking-wider uppercase">Légal</h3>
          <ul className="mt-4 space-y-4">
            <li>
              <Link to="/mentionsconfidentialite" className="text-base text-gray-500 hover:text-gray-900">
                Politique de confidentialité
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-base text-gray-500 hover:text-gray-900">
                Conditions d'utilisation
              </Link>
            </li>
            <li>
              <Link to="/mentionslegales" className="text-base text-gray-500 hover:text-gray-900">
                Mentions légales
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 border-t border-primary-100 pt-8">
        <p className="text-base text-gray-400 text-center">
          © {new Date().getFullYear()} Valentine Psychomotricienne. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
);

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-grow pt-16"> {/* Ajout du padding-top pour éviter l'empiètement */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
