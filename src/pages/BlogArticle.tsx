import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart, Star } from 'lucide-react';
import { Helmet } from 'react-helmet';

const BlogArticle = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <>
      <Helmet>
        <title>Trois Façons Sublimes d'Utiliser Nos Huiles pour le Corps | Senteurs by Mabi</title>
        <meta name="description" content="Trois façons simples et féminines d'utiliser nos huiles pour le corps Senteurs by Mabi pour sentir bon et rayonner en douceur." />
        <meta name="keywords" content="huiles parfumées, parfum naturel, senteurs, beauté, rituel beauté, huiles corps" />
      </Helmet>

      <div className="pt-20 bg-background min-h-screen">
        <article className="container mx-auto px-4 py-16 max-w-4xl">
          <header className="text-center mb-16">
            <motion.h1
              className="text-4xl md:text-5xl font-playfair mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Trois Façons Sublimes d'Utiliser Nos Huiles pour le Corps
            </motion.h1>
          </header>

          <motion.div
            ref={ref}
            className="prose prose-lg mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <section className="mb-12">
              <p className="text-xl leading-relaxed">
                Chez <strong>Senteurs by Mabi</strong>, nous pensons que sentir bon, c'est déjà se sentir bien. Nos huiles parfumées sont conçues pour éveiller vos sens,
                renforcer votre confiance et affirmer votre féminité. Chaque goutte est une caresse parfumée qui révèle votre charme naturel. Ce ne sont pas des soins hydratants,
                mais bien des alliés olfactifs pour magnifier votre présence. Voici <strong>trois façons délicates</strong> d'utiliser nos huiles au quotidien pour rayonner subtilement.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-playfair mb-6">1. Quelques gouttes dans votre bain pour une ambiance parfumée</h2>
              <p>
                Transformez un simple bain en véritable rituel de relaxation parfumée. Il suffit d'ajouter quelques gouttes de notre huile dans l'eau chaude
                pour embaumer votre salle de bain d'un voile enivrant. Le parfum délicat qui se dégage vous enveloppe et reste sur votre peau longtemps après votre sortie du bain.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mt-4">
                <p className="flex items-center text-primary">
                  <Star className="w-5 h-5 mr-2" />
                  <em>Conseil : Versez l'huile sous le jet d'eau chaude pour bien diffuser les arômes et éviter les résidus gras.</em>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-playfair mb-6">2. Sur les points de pulsation pour une touche subtile de parfum</h2>
              <p>
                Pour une senteur discrète mais durable, appliquez l'huile directement sur vos zones de chaleur : poignets, nuque, derrière les oreilles.
                Ces zones dégagent naturellement de la chaleur, ce qui aide à diffuser le parfum tout au long de la journée.
              </p>
              <p>
                Une excellente alternative aux parfums alcoolisés, plus douce pour la peau, et idéale pour celles qui aiment se parfumer avec légèreté.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mt-4">
                <p className="flex items-center text-primary">
                  <Star className="w-5 h-5 mr-2" />
                  <em>Astuce : Appliquez après la douche sur peau propre pour une diffusion prolongée.</em>
                </p>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-playfair mb-6">3. Mélangez-la à votre lait corporel pour parfumer votre peau</h2>
              <p>
                Bien que nos huiles ne soient pas hydratantes, elles se marient à merveille avec un lait neutre pour ajouter une dimension parfumée à votre soin habituel.
                Versez une noisette de lait dans votre main, ajoutez une goutte ou deux d'huile parfumée, mélangez et appliquez. Vous profiterez ainsi d'une peau délicatement parfumée,
                sans altérer les propriétés hydratantes de votre soin.
              </p>
              <div className="bg-primary/10 p-4 rounded-lg mt-4">
                <p className="flex items-center text-primary">
                  <Star className="w-5 h-5 mr-2" />
                  <em>Idée bonus : Utilisez cette méthode le matin pour rester parfumée toute la journée, sans effet gras.</em>
                </p>
              </div>
            </section>

            <section className="mb-16">
              <h2 className="text-3xl font-playfair mb-6">Un parfum de peau, un geste de féminité</h2>
              <p>
                Nos huiles ne sont pas des soins hydratants, mais elles subliment la peau par leur parfum unique. Elles sont le détail qui change tout,
                celui qui fait la différence entre un simple geste de beauté et un véritable rituel d'élégance. Sentez-vous belle, sûre de vous, et irrésistiblement vous-même.
              </p>
              <p>
                Faites de votre routine une expérience olfactive inoubliable avec <strong>Senteurs by Mabi</strong>.
              </p>
            </section>

            <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
              <h2 className="text-3xl font-playfair mb-8">Foire aux Questions</h2>
              
              <div className="space-y-6">
                {[
                  {
                    q: "Les huiles hydratent-elles la peau ?",
                    a: "Non, nos huiles ne sont pas conçues pour hydrater. Elles sont parfumées et servent uniquement à parfumer délicatement la peau."
                  },
                  {
                    q: "Puis-je porter l'huile comme un parfum ?",
                    a: "Oui, c'est leur usage principal ! Appliquée sur les points de pulsation, l'huile offre un parfum subtil qui vous accompagne toute la journée."
                  },
                  {
                    q: "Est-ce adapté aux peaux sensibles ?",
                    a: "Oui, nos formules douces sans alcool conviennent généralement aux peaux sensibles. Faites tout de même un test au pli du coude si vous avez la peau réactive."
                  },
                  {
                    q: "Est-ce que l'huile laisse un fini gras ?",
                    a: "Non, nos huiles sont légères et absorbées rapidement. Elles ne laissent pas de film gras si utilisées avec modération."
                  },
                  {
                    q: "Peut-on en mettre sur les cheveux ?",
                    a: "Nous recommandons un usage corporel uniquement. Nos huiles sont pensées pour la peau et non pour le cuir chevelu ou les cheveux."
                  },
                  {
                    q: "Combien de temps le parfum dure-t-il ?",
                    a: "Le parfum peut durer plusieurs heures selon votre type de peau, la zone d'application et la quantité utilisée."
                  }
                ].map((faq, index) => (
                  <div key={index} className="border-b border-gray-200 pb-4 last:border-0">
                    <h3 className="font-playfair text-xl mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                ))}
              </div>
            </section>

            <footer className="border-t pt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-playfair text-xl mb-4">Articles recommandés</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link to="/parfums-femme" className="flex items-center text-primary hover:text-primary/80">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Découvrir nos autres parfums
                      </Link>
                    </li>
                    <li>
                      <Link to="/rituel-sensoriel" className="flex items-center text-primary hover:text-primary/80">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Créer votre rituel sensoriel
                      </Link>
                    </li>
                    <li>
                      <Link to="/faq-huiles" className="flex items-center text-primary hover:text-primary/80">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Questions fréquentes sur nos huiles
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-playfair text-xl mb-4">Pour aller plus loin</h3>
                  <ul className="space-y-3">
                    <li>
                      <a 
                        href="https://www.healthline.com/nutrition/essential-oils"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-primary hover:text-primary/80"
                      >
                        <ArrowRight className="w-4 h-4 mr-2" />
                        En savoir plus sur les huiles parfumées
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/categories/women"
                  className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full hover:bg-primary/90 transition-all transform hover:scale-105"
                >
                  <Heart className="w-5 h-5" />
                  <span>Découvrir notre collection d'huiles parfumées</span>
                </Link>
              </div>
            </footer>
          </motion.div>
        </article>
      </div>
    </>
  );
};

export default BlogArticle;