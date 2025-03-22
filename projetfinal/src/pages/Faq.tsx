import { useState } from "react";
import { ChevronDown, ChevronUp, Search } from "lucide-react";
import SEO from "../components/SEO";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  { question: "Quels sont vos services d'accompagnement ?", 
   answer: "J'accompagne les enfants dans leurs difficultés d'apprentissage, la gestion du stress et le développement de la confiance en soi." },
  { question: "À partir de quel âge peut-on bénéficier de vos services ?", 
   answer: "J'accompagne les enfants à partir de 6 ans, en fonction de leurs besoins spécifiques."},
   {question: "Proposez-vous des séances en ligne ?", 
    answer: "Non, les séances se déroulent uniquement en présentiel afin de garantir un accompagnement optimal." },
  {question: "Comment prendre rendez-vous ?", 
    answer: <>Les rendez-vous se prennent directement sur <a href="https://www.doctolib.fr" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Doctolib</a>.</>},  
  { question: "Quels sont vos tarifs ?",
   answer: "Les tarifs varient en fonction du type d'accompagnement. N'hésitez pas à me contacter pour plus d'informations." },
  { question: "Combien de temps dure une séance ?",
   answer: "Une séance dure en moyenne entre 45 minutes et 1 heure, en fonction des besoins de l'enfant." },
  { question: "Puis-je assister aux séances avec mon enfant ?",
   answer: "Oui, les parents peuvent assister aux premières séances pour observer le déroulement et échanger sur les progrès." },
  { question: "Utilisez-vous des méthodes spécifiques ?", 
   answer: "J'adapte mes méthodes en fonction des besoins de chaque enfant, en utilisant des approches pédagogiques bienveillantes et ludiques." },
  { question: "Quelle est la fréquence des séances ?",
   answer: "La fréquence dépend des besoins de l'enfant, mais en général, une séance hebdomadaire est recommandée pour un suivi efficace." },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const filteredFAQs = faqData.filter(item =>
    item.question.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <SEO
        title="FAQ | Valentine Psychomotricienne"
        description="Réponses à vos questions sur les bilans psychométriques, le déroulement des séances, les tarifs et l'accompagnement des enfants."
      />
<div className="max-w-4xl mx-auto px-6 py-12">
  <h1 className="page-title text-5xl font-bold">Foire Aux Questions</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto py-6 mb-12">
            Trouvez les réponses à vos questions sur mes services d'accompagnement psychomoteur pour les enfants, y compris les tarifs, la durée des séances et bien plus encore.
  </p>

        {/* Barre de recherche */}
        <div className="relative mb-8">
          <input
            type="text"
            placeholder="Rechercher une question..."
            className="w-full p-4 pl-12 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-500 text-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-4 top-4 w-6 h-6 text-gray-500" />
        </div>

        {/* Liste des questions */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border border-gray-200 transition-all duration-200 hover:shadow-xl">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-xl font-medium text-gray-900"
                >
                  {item.question}
                  {openIndex === index ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-lg text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-lg">
              Aucune question ne correspond à votre recherche.
            </p>
          )}
        </div>

        {/* Bouton de prise de rendez-vous centré */}
        <div className="flex justify-center mt-12">
          <a
            href="https://www.doctolib.fr"
            className="inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-lg shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-200"
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