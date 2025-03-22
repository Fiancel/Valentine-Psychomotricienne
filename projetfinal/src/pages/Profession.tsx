import React from 'react';
import { Brain, Target, ClipboardCheck, Users, BookOpen, HeartHandshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO";

export default function Profession() {
  return (
    <>
      <SEO
        title="Mon Métier | Valentine Psychomotricienne"
        description="La psychométrie au service du développement et de l'épanouissement de votre enfant. Découvrez mes méthodes d'évaluation et d'accompagnement personnalisé."
      />


<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
  <div className="text-center mb-12">
    <h1 className="page-title text-5xl font-bold ">Mon Métier</h1>
    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
      La psychométrie au service du développement et de l'épanouissement de votre enfant
    </p>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16 md:ml-40">
    {/* Carré rose */}
    <div className="bg-primary-100 p-8 rounded-xl flex flex-col justify-between h-full mt-5">
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Qu'est-ce que la psychométrie ?
      </h2>
      <p className="text-gray-600 mb-6">
        La psychométrie est une discipline scientifique qui permet d'évaluer et de mesurer les capacités cognitives,
        le potentiel intellectuel et les compétences d'apprentissage. Elle utilise des outils standardisés et validés
        scientifiquement pour fournir une évaluation objective des forces et des points d'amélioration de votre enfant.
      </p>
      <div className="space-y-4">
        <div className="flex items-start">
          <Brain className="h-6 w-6 text-primary-500 mr-3 mt-1" />
          <p className="text-gray-600">
            Évaluation des capacités cognitives et du potentiel intellectuel
          </p>
        </div>
        <div className="flex items-start">
          <Target className="h-6 w-6 text-primary-500 mr-3 mt-1" />
          <p className="text-gray-600">
            Identification des forces et des axes d'amélioration
          </p>
        </div>
        <div className="flex items-start">
          <ClipboardCheck className="h-6 w-6 text-primary-500 mr-3 mt-1" />
          <p className="text-gray-600">
            Utilisation d'outils standardisés et scientifiquement validés
          </p>
        </div>
      </div>
    </div>

    {/* Image */}
    <div className="flex justify-center h-full mt-5"> {/* Ajoute ici une marge supérieure */}
      <img
        src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
        alt="Séance de psychométrie"
        className="rounded-lg w-full sm:w-96 md:w-80 lg:w-72 h-full object-cover border border-primary-200"
      />
    </div>
</div>

        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Déroulement d'une Séance
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">1. Premier Contact</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Échange initial avec les parents</li>
                <li>• Recueil des besoins et attentes</li>
                <li>• Présentation de la démarche</li>
                <li>• Prise de rendez-vous</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">2. Évaluation</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Tests adaptés à l'âge</li>
                <li>• Exercices ludiques</li>
                <li>• Observation du comportement</li>
                <li>• Durée : 1h30 à 2h</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md border border-primary-100">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">3. Restitution</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Analyse des résultats</li>
                <li>• Rapport détaillé</li>
                <li>• Recommandations personnalisées</li>
                <li>• Plan d'action</li>
              </ul>
            </div>
          </div>
        </div>

<div className="bg-primary-100 rounded-2xl p-8 mb-10 ">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Domaines d'Intervention
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-6 w-6 text-primary-500 mr-2" />
                Difficultés d'Apprentissage
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Troubles de l'attention</li>
                <li>• Difficultés de lecture ou d'écriture</li>
                <li>• Problèmes de mémorisation</li>
                <li>• Troubles du calcul</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Users className="h-6 w-6 text-primary-500 mr-2" />
                Développement Personnel
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Confiance en soi</li>
                <li>• Motivation scolaire</li>
                <li>• Gestion des émotions</li>
                <li>• Relations avec les autres</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
            <HeartHandshake className="h-8 w-8 text-primary-500 mr-3" />
            Prêt à commencer ?
          </h2>
          <p className="text-gray-600 mb-8">
            Chaque enfant est unique et mérite un accompagnement personnalisé. Prenez rendez-vous pour 
            une première consultation et découvrez comment je peux aider votre enfant à développer son 
            plein potentiel.
          </p>
          <a
            href="https://www.doctolib.fr"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            Prendre un rendez-vous
          </a>
        </div>
      </div>
    </>
  );
}