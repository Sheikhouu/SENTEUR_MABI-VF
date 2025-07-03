import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Info } from 'lucide-react';

export const faqData = [
  {
    question: "Quelle est la différence entre une brume corporelle et un parfum ?",
    answer: "Nos brumes et huiles sont des produits odorants légers, conçus pour parfumer délicatement. Leur concentration en fragrances est plus légère qu'un parfum traditionnel, offrant une expérience plus subtile et naturelle."
  },
  {
    question: "Ces produits peuvent-ils être appliqués directement sur la peau ?",
    answer: "Oui, nos huiles sont spécialement formulées pour une application cutanée en toute sécurité. Elles nourrissent la peau tout en la parfumant délicatement. Les brumes peuvent être vaporisées sur la peau ou les vêtements."
  },
  {
    question: "Comment utiliser correctement ces produits ?",
    answer: "Pour les huiles, appliquez quelques gouttes directement sur la peau, en insistant sur les points de pulsation. Pour les brumes, vaporisez à 20-30 cm de distance sur la peau ou les vêtements."
  },
  {
    question: "Quelle est la durée de conservation recommandée ?",
    answer: "12 mois après ouverture, conservés dans un endroit frais et sec, à l'abri de la lumière directe."
  },
  {
    question: "Les fragrances sont-elles naturelles ?",
    answer: "Nos produits contiennent un mélange d'huiles essentielles naturelles et de parfums de synthèse soigneusement sélectionnés."
  },
  {
    question: "Peut-on les utiliser sur les vêtements ?",
    answer: "Oui, mais faites un test préalable sur une petite zone peu visible pour éviter toute décoloration."
  }
];

const FAQ = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <div className="pt-20 bg-background min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">
            Questions Fréquentes
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos produits
          </p>
        </motion.div>

        {/* Notice de sécurité */}
        <motion.div
          className="bg-white rounded-lg p-6 shadow-lg mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-start space-x-4">
            <Info className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
            <div>
              <h2 className="font-playfair text-xl mb-4">Conseils d'utilisation importants</h2>
              <ul className="text-gray-600 space-y-2">
                <li>• Tenir hors de portée des enfants et des animaux</li>
                <li>• Ne jamais laisser un brûleur sans surveillance</li>
                <li>• Utiliser uniquement dans un espace bien ventilé</li>
                <li>• Suivre les instructions de dilution recommandées</li>
                <li>• En cas de contact avec les yeux, rincer abondamment à l'eau</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto space-y-6" ref={ref}>
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-playfair mb-4">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;