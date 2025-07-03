import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, Users } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-12 h-12 text-primary" />,
      title: "Passion Familiale",
      description: "Un savoir-faire unique transmis de mère en fille, perpétuant une tradition d'excellence."
    },
    {
      icon: <Star className="w-12 h-12 text-primary" />,
      title: "Excellence Artisanale",
      description: "Chaque création est façonnée avec soin et exigence, reflétant notre engagement pour la qualité."
    },
    {
      icon: <Sparkles className="w-12 h-12 text-primary" />,
      title: "Créations Uniques",
      description: "Des senteurs envoûtantes qui racontent une histoire unique, votre histoire."
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: "Héritage Partagé",
      description: "Une passion familiale devenue une expérience olfactive à partager avec tous."
    }
  ];

  return (
    <div className="pt-20 bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-playfair mb-6">
            Notre Histoire
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Une aventure olfactive née de l'amour et de la tradition
          </p>
        </motion.div>

        {/* Histoire principale */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-3xl font-playfair mb-8 text-center">L'Histoire de Senteurs by Mabi</h2>
            
            <div className="space-y-6 text-gray-700">
              <p className="text-lg leading-relaxed">
                <strong className="text-primary">Senteurs by Mabi</strong> est bien plus qu'une marque, c'est une <em>histoire</em>, une <em>passion</em>, un <em>héritage</em>. C'est l'aboutissement d'une passion transmise de mère en fille.
              </p>

              <p className="text-lg leading-relaxed">
                Dès mon enfance, j'ai vu ma mère que j'ai toujours appelée <strong className="text-primary">Mabi</strong> - un doux mélange de "Ma" pour maman et "Bi" pour Bineta - composer avec amour des senteurs envoûtantes. Des effluves d'huiles précieuses, d'encens délicats et de fragrances raffinées ont toujours fait partie de notre quotidien.
              </p>

              <blockquote className="italic border-l-4 border-primary pl-4 my-8">
                Ce savoir-faire, empreint de tradition et d'émotion, nous l'avons longtemps gardé dans le cercle familial, jusqu'à ce que vos demandes incessantes nous poussent à le partager.
              </blockquote>

              <p className="text-lg leading-relaxed">
                Aujourd'hui, cette <strong>aventure olfactive</strong> célèbre l'élégance des senteurs, qu'elles parent la peau ou envoûtent l'atmosphère. Je suis fière de perpétuer cette passion en tant que vendeuse principale et créatrice de contenu, tout en accompagnant ma mère dans la production.
              </p>

              <p className="text-lg leading-relaxed">
                Chaque produit que nous proposons est une <em>invitation à l'évasion</em>, une promesse de bien-être et de raffinement. Notre maison propose des créations uniques, façonnées avec soin et exigence.
              </p>

              <p className="text-xl font-playfair text-center mt-8">
                "Chaque note, chaque effluve raconte une histoire... la vôtre"
              </p>
            </div>
          </div>
        </motion.div>

        {/* Nos Valeurs */}
        <div className="mb-16">
          <motion.h2
            className="text-3xl font-playfair text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Nos Valeurs
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * (index + 3) }}
              >
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-playfair mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Engagement */}
        <motion.div
          className="bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl font-playfair mb-6 text-center">Notre Engagement</h2>
          <div className="max-w-3xl mx-auto text-gray-600 space-y-4">
            <p>
              Nous nous engageons à perpétuer l'excellence artisanale qui fait notre réputation. Chaque création est le fruit d'un savoir-faire transmis avec amour et perfectionné au fil des générations.
            </p>
            <p>
              Notre mission est de vous offrir des expériences olfactives uniques, où tradition et innovation se rencontrent pour créer des moments de pure émotion.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;