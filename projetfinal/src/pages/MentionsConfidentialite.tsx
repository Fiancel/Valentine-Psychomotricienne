import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function MentionsConfidentialite() {
  return (
    <>
      <SEO
        title="Politique de Confidentialité | Valentine Psychomotricienne"
        description="Découvrez notre politique de confidentialité et comment nous protégeons vos données personnelles."
      />

      <div className="bg-gradient-to-b from-primary-50 to-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">Politique de Confidentialité</h1>
          
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Collecte des données</h2>
            <p className="text-gray-700 mb-4">
              Nous collectons les informations suivantes lors de la prise de rendez-vous :
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Informations concernant votre enfant (nom, âge)</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Utilisation des données</h2>
            <p className="text-gray-700 mb-4">
              Les données collectées sont utilisées pour :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Gérer les rendez-vous</li>
              <li>Assurer le suivi des patients</li>
              <li>Communiquer des informations importantes</li>
              <li>Améliorer nos services</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Protection des données</h2>
            <p className="text-gray-700 mb-4">
              Nous mettons en œuvre des mesures de sécurité pour protéger vos données personnelles :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Stockage sécurisé des données</li>
              <li>Accès limité aux informations</li>
              <li>Chiffrement des données sensibles</li>
              <li>Mise à jour régulière des systèmes de sécurité</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Vos droits</h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-6 text-gray-700">
              <li>Droit d'accès à vos données</li>
              <li>Droit de rectification</li>
              <li>Droit à l'effacement</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité des données</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mt-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant notre politique de confidentialité ou pour exercer vos droits, 
              vous pouvez nous contacter à l'adresse suivante : valentine.nicolas@psychomotricien.eu
            </p>
          </div>
        </div>
      </div>

      <footer className="bg-primary-700 text-white p-6 text-center mt-12">
        <p>&copy; {new Date().getFullYear()} Valentine Psychomotricienne. Tous droits réservés.</p>
      </footer>
    </>
  );
}