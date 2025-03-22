import React from 'react';
import SEO from '../components/SEO';

export default function MentionsLegales() {
  return (
    <>
      <SEO
        title="Mentions Légales | Valentine Psychomotricienne"
        description="Mentions légales du cabinet de psychomotricité de Valentine Nicolas à Lyon. Informations légales, droits et responsabilités."
        keywords="mentions légales, psychomotricienne lyon, cabinet psychomotricité"
      />

      <div className="bg-gradient-to-b from-primary-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Mentions Légales</h1>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Éditeur du site</h2>
            <p className="text-gray-700">Nom : Valentine Nicolas</p>
            <p className="text-gray-700">Adresse : 56b lotissement Létrat, 38230 Tignieu-Jameyzieu</p>
            <p className="text-gray-700">Email : valentine.nicolas@psychomotricien.eu</p>
            <p className="text-gray-700">Téléphone : 06 59 90 87 61</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Hébergeur</h2>
            <p className="text-gray-700">Nom de l'hébergeur : Netlify</p>
            <p className="text-gray-700">Adresse : 2325 3rd Street, Suite 296, San Francisco, California 94107</p>
            <p className="text-gray-700">Site web : www.netlify.com</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Propriété intellectuelle</h2>
            <p className="text-gray-700">L'ensemble du contenu de ce site (textes, images, vidéos, etc.) est protégé par le droit d'auteur. Toute reproduction ou utilisation sans autorisation préalable est strictement interdite.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Protection des données personnelles</h2>
            <p className="text-gray-700">Les informations collectées sur ce site sont utilisées uniquement dans le cadre de votre suivi thérapeutique et ne sont en aucun cas cédées à des tiers. Conformément au RGPD, vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles.</p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Cookies</h2>
            <p className="text-gray-700">Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. En naviguant sur ce site, vous acceptez l'utilisation de ces cookies.</p>
          </div>
        </div>
      </div>

      <footer className="bg-primary-700 text-white p-6 text-center mt-12">
        <p>&copy; {new Date().getFullYear()} Valentine Psychomotricienne. Tous droits réservés.</p>
      </footer>
    </>
  );
}