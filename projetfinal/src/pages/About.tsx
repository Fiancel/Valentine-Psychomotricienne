import React from 'react';
import { Sparkles, GraduationCap, Heart, Trophy } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEO from "../components/SEO"; // N'oublie pas de créer ce composant SEO

export default function About() {
  return (
    <>
      {/* SEO Metadata */}
      <SEO 
        title="Qui suis-je ? | Valentine Psychomotricienne"
        description="Découvrez le parcours et la passion de Valentine, psychométricienne spécialisée dans l'accompagnement des enfants, avec plus de 10 ans d'expérience."
        keywords="psychomotricienne, enfants, développement cognitif, bien-être, accompagnement personnalisé"
        language="fr"
      />
      
      {/* About Section */}
      <section id="about" className="py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-20">Qui suis-je ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center z-1">
            {/* Image */}
            <img
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGV8fHx8&auto=format&fit=crop&w=1000&q=80"
              alt="Valentine, Psychométricienne"
className="rounded-lg w-full sm:w-96 md:w-80 lg:w-72 h-auto md:ml-40 mb-20"
            />
<div className="md:ml-10 z-9 bg-primary-100 p-8 rounded-xl flex flex-col justify-between h-104 -mt-[4.5em] md:-ml-[4.5em] sm:w-full ">
{/* Texte centré et ajusté */}
<div className="mx-auto z-9 max-w-4xl">
  <p className="text-xl text-gray-600 mb-10 font-bold md:text-center sm:text-justify sm:-ml-{10}">
    Je suis Valentine, psychomotricienne passionnée par l'accompagnement des enfants. Mon approche bienveillante et personnalisée permet à chaque enfant de révéler son potentiel unique.
  </p>
  
{/* Nouveau texte ajouté ici */}
<div className="space-y-4">
  <div className="flex items-start">
    <Heart className="md:h-6 md:w-6 text-primary-500 mr-3  sm:h-8 sm:w-8" />
    <p className="text-gray-600">
      Passionnée par le développement et le bien-être des enfants
    </p>
  </div>
  <div className="flex items-start">
    <GraduationCap className="md:h-6 md:w-6 text-primary-500 mr-3  sm:h-8 sm:w-8" />
    <p className="text-gray-600">
      Master en Psychologie et spécialisation en Psychométrie
    </p>
  </div>
  <div className="flex items-start">
    <Trophy className="md:h-6 md:w-6 text-primary-500 mr-3 sm:w-full sm:h-fu" />
    <p className="text-gray-600">
      Accompagnement de nombreux enfants et adolescents vers un meilleur épanouissement.
    </p>
  </div>
</div>


        </div>
      </div>
     </div>
    </div>
</section>


      <div className="bg-primary-100 rounded-2xl p-8 mb-16  ">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
          Mon Parcours
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary-60">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-primary-500 mr-3" />
              <h3 className="text-lg font-semibold">Formation</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Diplômée d'État de psychomotricienne en juin 2024 </li>
              <li>• Spécialisation en Psychométrie</li>
              <li>• Formation continue en neurosciences</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary-60">
            <div className="flex items-center mb-4">
              <Sparkles className="h-8 w-8 text-primary-500 mr-3" />
              <h3 className="text-lg font-semibold">Expérience</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• 1 an de pratique professionnelle</li>
              <li>• Collaboration avec des écoles</li>
              <li>• Intervention en centres spécialisés</li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border border-primary-60">
            <div className="flex items-center mb-4">
              <Heart className="h-8 w-8 text-primary-500 mr-3" />
              <h3 className="text-lg font-semibold">Valeurs</h3>
            </div>
            <ul className="space-y-2 text-gray-600">
              <li>• Bienveillance et écoute</li>
              <li>• Approche personnalisée</li>
              <li>• Engagement et professionnalisme</li>
            </ul>
          </div>
        </div>
      </div>
          

      <div className=" max-w-3xl mx-auto">
        <h2 className=" text-center text-2xl font-semibold text-gray-900 mb-6">
          Mon Engagement
        </h2>
        <p className="text-gray-600 mb-8 ml-12">
          Je m'engage à fournir un accompagnement personnalisé et professionnel à chaque enfant, en travaillant en étroite collaboration avec les parents pour assurer le meilleur suivi possible. Ma mission est d'aider chaque enfant à développer son plein potentiel dans un environnement bienveillant et adapté.
        </p>
<div class="flex justify-center">
  <a
    href="https://www.doctolib.fr"  // URL de Doctolib
    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 mb-10"
    target="_blank"  // Ouvre le lien dans un nouvel onglet
    rel="noopener noreferrer"  // Sécurité additionnelle lors de l'ouverture dans un nouvel onglet
  >
    Prendre un rendez-vous
  </a>
</div>

      </div>
    </>
  );
}
