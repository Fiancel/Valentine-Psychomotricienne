import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar, Heart, Brain, ArrowDown, ChevronDown, ChevronUp, Sparkles, GraduationCap, Trophy} from "lucide-react";
import SEO from "../components/SEO";

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const shortFAQ = [
    {
      question: "Quels sont vos services d'accompagnement ?",
      answer: "J'accompagne les enfants dans leurs difficultés d'apprentissage, la gestion du stress et le développement de la confiance en soi.",
    },
    {
      question: "À partir de quel âge peut-on bénéficier de vos services ?",
      answer: "J'accompagne les enfants à partir de 6 ans, en fonction de leurs besoins spécifiques.",
    },
    {
      question: "Proposez-vous des séances en ligne ?",
      answer: "Non, les séances se déroulent uniquement en présentiel afin de garantir un accompagnement optimal.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <SEO
        title="Psychomotricienne à Lyon | Bilans psychométriques enfants et adolescents"
        description="Cabinet de psychomotricité à Lyon spécialisé dans l'accompagnement des enfants et adolescents. Bilans psychométriques, suivi personnalisé et conseils aux parents."
        keywords="psychomotricienne lyon, bilan psychométrique, développement enfant, psychomotricité, accompagnement enfants"
      />
      <div className="bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section */}
        <div className="relative min-h-screen flex items-center bg-cover bg-center" style={{ backgroundImage: "url('https://www.bloghoptoys.fr/wp-content/uploads/2021/05/tdc-psychomotricite.jpg')" }}>
          <div className="absolute inset-0 z-0"></div>

          <div className="relative pt-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-">
            <div className="text-center">
              <Heart className="h-16 w-16 text-primary-400 mx-auto mb-6" />
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl z-1">
                <span className="block">Valentine</span>
                <span className="block text-primary-600">Psychomotricienne</span>
                <span className="block">pour Enfants</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Un accompagnement personnalisé pour aider votre enfant à développer son plein potentiel.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
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
              <button
                onClick={() => scrollToSection("about")}
                className="mt-8 text-primary-600 hover:text-primary-700 animate-bounce"
                aria-label="Défiler vers la section À propos"
              >
                <ArrowDown className="h-8 w-8 mx-auto" />
              </button>
            </div>
          </div>
        </div>

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
      {/* Texte décalé vers la gauche */}
      <div className="ml-2100 z-9 ">
        <p className="text-xl text-gray-600 mb-10 font-bold ">
          Je suis Valentine, psychomotricienne passionnée par l'accompagnement des enfants. Mon approche bienveillante et personnalisée permet à chaque enfant de révéler son potentiel unique.
        </p>
        
        {/* Nouveau texte ajouté ici */}
        <div>
          
          <div className="space-y-4">
            <div className="flex items-start">
              <Heart className="h-6 w-6 text-primary-500 mr-3 mt-1" />
              <p className="text-gray-600">
                Passionnée par le développement et le bien-être des enfants
              </p>
            </div>
            <div className="flex items-start">
              <GraduationCap className="h-6 w-6 text-primary-500 mr-3 mt-1" />
              <p className="text-gray-600">
                Master en Psychologie et spécialisation en Psychométrie
              </p>
            </div>
            <div className="flex items-start">
              <Trophy className="h-6 w-6 text-primary-500 mr-3 mt-1" />
              <p className="text-gray-600 mb-10">
                Accompagnement de nombreux enfants et adolescents vers un meilleur épanouissement.
              </p>
            </div>
          </div>
        </div>
        
        <Link to="/about" className="text-primary-600 hover:text-primary-700 font-medium">
          En savoir plus →
        </Link>
      </div>
    </div>
  </div>
</section>

        {/* Profession Section */}
        <section id="profession" className="py-20 bg-primary-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Mon métier</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Brain className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Évaluation</h3>
                <p className="text-gray-500">Analyse approfondie des capacités cognitives et du potentiel de votre enfant.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Heart className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Accompagnement</h3>
                <p className="text-gray-500">Suivi personnalisé et adapté aux besoins spécifiques de chaque enfant.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <Calendar className="h-12 w-12 text-primary-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Suivi</h3>
                <p className="text-gray-500">Bilans réguliers et ajustement des stratégies d'accompagnement.</p>
              </div>
            </div>
            <div className="text-center mt-8">
              <Link to="/profession" className="text-primary-600 hover:text-primary-700 font-medium">
                Découvrir mon approche →
              </Link>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-10">
              Questions Fréquentes
            </h2>
            <span className="block w-24 mx-auto border-b-2 mb-6"></span>
            <div className="space-y-4">
              {shortFAQ.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-lg border border-gray-200">
                  <button 
                    onClick={() => toggleFAQ(index)} 
                    className="w-full flex justify-between items-center text-lg font-medium text-gray-900"
                    aria-expanded={openIndex === index}
                  >
                    {item.question}
                    {openIndex === index ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                  {openIndex === index && <p className="mt-3 text-gray-700">{item.answer}</p>}
                </div>
              ))}
            </div>

            <div className="text-center mt-6">
              <div className="mt-16">
                <Link to="/faq" className="text-primary-600 hover:text-primary-700 font-medium">
                  Découvrir toutes les questions →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}